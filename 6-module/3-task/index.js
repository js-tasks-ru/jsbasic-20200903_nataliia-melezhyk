import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    const carousel = document.createElement('div');
    carousel.className = 'carousel';

    this.carouselInner;
    this.widthSilde;
    this.caunterSlides = 0;
    

    const card = this.carouselSlide(slides); 
    const arrowsBtn = this.createArrowsBtn();

    carousel.append(arrowsBtn);
    carousel.append(card); 

    this.elem = carousel;
  }     

  carouselSlide(slides){
    const carouselInner = document.createElement('div');
    carouselInner.className = 'carousel__inner';
    this.carouselInner = carouselInner;
    slides.forEach(item => {
      const carouselHolder = document.createElement('div');
      carouselHolder.className = 'carousel__slide';
      carouselHolder.setAttribute('data-id', 'penang-shrimp');
      this.widthSilde = carouselHolder;

      const carouselImg  = document.createElement('img');
      carouselImg.className = 'carousel__img';
      const srcImg = '/assets/images/carousel/' + item.image;
      carouselImg.setAttribute('src', srcImg);
      carouselHolder.append(carouselImg);

      const carouselCaption= document.createElement('div');
      carouselCaption.className = 'carousel__caption';

      const price = document.createElement('span');
      price.className = 'carousel__price';
      const priceValue = '€' + item.price.toFixed(2);
      price.append(priceValue);
      carouselCaption.append(price);

      const carouselTitle = document.createElement('div');
      carouselTitle.className = 'carousel__title';
      carouselTitle.innerHTML = item.name;
      carouselCaption.append(carouselTitle);

      const carouselButton = document.createElement('button');
      carouselButton.className = 'carousel__button';
      carouselButton.setAttribute('type', 'button');
      carouselButton.addEventListener('product-add', function(event){})
      carouselButton.addEventListener('click', function(event){
        carouselButton.dispatchEvent(new CustomEvent("product-add", {
          "detail" : item.id,
          "bubbles" : true
        }))
        event.stopPropagation();
      })

      const imgButton = document.createElement('img');
      imgButton.setAttribute('alt', 'icon');
      imgButton.setAttribute('src', '/assets/images/icons/plus-icon.svg');
      carouselButton.append(imgButton);
      carouselCaption.append(carouselButton);
      carouselHolder.append(carouselCaption);
      carouselInner.append(carouselHolder);
      this.caunterSlides++;
    });
    return carouselInner; 
  }

  createArrowsBtn(){
    const innerBox = this.carouselInner;

    let current = 1;
    const caunterSlides = this.caunterSlides;

    /* Right button */
    const arrowBtnR = document.createElement('div');
    arrowBtnR.className = 'carousel__arrow carousel__arrow_right';

    const arrowImgR = document.createElement('img');
    arrowImgR.setAttribute('alt', 'icon');
    arrowImgR.setAttribute('src', '/assets/images/icons/angle-icon.svg');

    arrowBtnR.append(arrowImgR);

    /* Left button */
    const arrowBtnL = document.createElement('div');
    arrowBtnL.className = 'carousel__arrow carousel__arrow_left';
    arrowBtnL.style.display = 'none'; 

    const arrowImgL = document.createElement('img');
    arrowImgL.setAttribute('alt', 'icon');
    arrowImgL.setAttribute('src', '/assets/images/icons/angle-left-icon.svg');

    arrowBtnL.append(arrowImgL);

    arrowBtnR.addEventListener('click', function(){
      const widthSilde = document.querySelector('.carousel__slide').offsetWidth;
      if(current != this.caunterSlides){
        innerBox.style.transform = 'translateX(-' + (widthSilde * current) + 'px)';      
      }
      current++;
      if(current != 1) arrowBtnL.style.display = '';
      if (current == caunterSlides) arrowBtnR.style.display = 'none';
    }); 

    arrowBtnL.addEventListener('click', function(){
      const widthSilde = document.querySelector('.carousel__slide').offsetWidth;
      const currentValue = window.getComputedStyle(innerBox).getPropertyValue('transform').match(/(-?[0-9\.]+)/g)[4];
      if(current > 0 ){
        if(current != 1) arrowBtnR.style.display = '';
        innerBox.style.transform = 'translateX(' + (+currentValue +  widthSilde) + 'px)';      
      }
      current--;
      if (current == 1) arrowBtnL.style.display = 'none';
    });

    const btnHolder = document.createElement('div');
    btnHolder.append(arrowBtnR);
    btnHolder.append(arrowBtnL);

    return btnHolder;
  }
}
