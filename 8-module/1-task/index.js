import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    let initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;

    if (window.pageYOffset > initialTopCoord && (document.documentElement.clientWidth >= 1080 && document.documentElement.clientWidth <= 1920)) {

      const leftIndent = document.querySelector('.container').getBoundingClientRect().right + 20;
      const rightIndent = document.documentElement.clientWidth - this.elem.offsetWidth - 10;

      let indent = Math.min(leftIndent, rightIndent) + 'px';
      Object.assign(this.elem.style, {
        position: 'fixed',
        top: '50px',
        zIndex: 1e3,
        right: '10px',
        left: indent
      });
    } else if (document.documentElement.clientWidth <= 767) {
      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''
      });
    } else if (document.documentElement.clientWidth >= 990 && document.documentElement.clientWidth <= 1080 ){
      const LeftIndent = document.documentElement.clientWidth - this.elem.offsetWidth - 10;
      Object.assign(this.elem.style, {
        position: 'fixed',
        left: LeftIndent + 'px'
      });
    } else {
      const leftIndent = document.querySelector('.container').getBoundingClientRect().right + 20;
      Object.assign(this.elem.style, {
        position: 'fixed',
        top: '',
        left: leftIndent + 'px',
        zIndex: ''
      });
    }
  }
}
