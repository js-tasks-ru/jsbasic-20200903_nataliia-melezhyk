import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;


    const ribbon = document.createElement('div');
    ribbon.className = 'ribbon';

    const btnLeft = this.btnLeft();
    ribbon.append(btnLeft); 

    const menu = this.createMenu(categories);
    ribbon.append(menu);

    const btnRight = this.btnRight();
    ribbon.append(btnRight); 

    this.elem = ribbon;
  }

  btnLeft(){
    const btnLeft = document.createElement('button');
    btnLeft.className = 'ribbon__arrow ribbon__arrow_left';

    const imgArrow = document.createElement('img');
    imgArrow.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    imgArrow.setAttribute('alt', 'icon');
    btnLeft.append(imgArrow);

    btnLeft.addEventListener('click', function(event){

      const ribbonInner = document.querySelector('.ribbon__inner');
      const btnRight = document.querySelector('.ribbon__arrow_right');

      btnRight.classList.add('ribbon__arrow_visible');

      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      ribbonInner.scrollBy(-350, 0);
      if(scrollRight < 1) btnLeft.classList.remove('ribbon__arrow_visible');
    })
    return btnLeft;
  }

  createMenu(categories){
    const menuInner = document.createElement('div');
    menuInner.className = 'ribbon__inner';
    categories.forEach(element => {
      const link = document.createElement('a');
      link.innerHTML = element.name;
      link.setAttribute('href', '#');
      link.setAttribute('data-id' , element.id);
      link.className = 'ribbon__item';
      link.addEventListener('click', function(event){
        const listItems = event.target.parentNode.querySelectorAll('a');
        for(const link of listItems){
          link.classList.remove('ribbon__item_active');
        }
        event.preventDefault();
        event.target.classList.add('ribbon__item_active');

      })
      link.addEventListener('ribbon-select', function(event){})
      link.addEventListener('click', function(event){
        link.dispatchEvent(new CustomEvent("ribbon-select", {
          "detail" : element.id,
          "bubbles" : true
        }))
        event.stopPropagation();
      })
      menuInner.append(link);
    });
    return menuInner;
  }

  btnRight(){
    const btnRight = document.createElement('button');
    btnRight.className = 'ribbon__arrow ribbon__arrow_right ribbon__arrow_visible';

    const imgArrow = document.createElement('img');
    imgArrow.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    imgArrow.setAttribute('alt', 'icon');
    btnRight.append(imgArrow);

    btnRight.addEventListener('click', function(event){
      const btnLeft = document.querySelector('.ribbon__arrow_left');
      const ribbonInner = document.querySelector('.ribbon__inner');
      ribbonInner.scrollBy(350, 0);
      
      let scrollLeft = ribbonInner.scrollLeft;
      if(scrollLeft < 1) {
        btnRight.classList.remove('ribbon__arrow_visible');
      }
      btnLeft.classList.add('ribbon__arrow_visible');
    })
    return btnRight;
  }
}
