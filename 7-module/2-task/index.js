import createElement from '../../assets/lib/create-element.js';
import { ConsoleReporter } from 'jasmine';

export default class Modal {
  constructor() {
    this.title = '';
    this.content = '';

  }
  setTitle(title){
    this.title = title;
  }

  setBody(content){
    this.content = content;
  }

  open(){
    const container = document.querySelector('.container') || document.body;

    const modal = document.createElement('div');
    modal.className= 'modal';
    container.append(modal);

    const body = document.querySelector('body');
    body.classList.add('is-modal-open');

    const overlay = document.createElement('div');
    overlay.className = 'modal__overlay';
    modal.append(overlay);

    const inner = document.createElement('div');
    inner.className = 'modal__inner';
    modal.append(inner);

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal__header';

    const btnModalClose = document.createElement('button');
    btnModalClose.className = 'modal__close';
    btnModalClose.setAttribute('type', 'button');
    btnModalClose.addEventListener('click', function() {
      body.classList.remove('is-modal-open');
      modal.remove();
    })

    const imgClose = document.createElement('img');
    imgClose.setAttribute('src', '/assets/images/icons/cross-icon.svg');
    imgClose.setAttribute('alt', 'close-icon');
    btnModalClose.append(imgClose);
    modalHeader.append(btnModalClose);

    const titleModal = document.createElement('h3');
    titleModal.className = 'modal__title';
    titleModal.innerHTML = this.title;
    modalHeader.append(titleModal);
    inner.append(modalHeader);

    const modalBody = document.createElement('div');
    modalBody.className = 'modal__body';
    modalBody.append(this.content);
    inner.append(modalBody);

    modal.append(inner);

    document.body.addEventListener('keydown', function(event) {
      if(event.code === 'Escape') this.close();
    })
  }

  close(){
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    if(modal) modal.remove();
    if(body.classList.contains('is-modal-open')) body.classList.remove('is-modal-open');

  }
}
