function initCarousel() {
  let btnRight = document.querySelector('.carousel__arrow_right');
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let innerBox = document.querySelector('.carousel__inner');
  let widthSilde = document.querySelector('.carousel__slide').offsetWidth;
  let list = document.querySelectorAll('.carousel__slide');
  btnLeft.style.display = 'none';
  let current = 1;

  btnRight.addEventListener('click', function(){
    if(current != list.length){
      innerBox.style.transform = 'translateX(-' + (widthSilde * current) + 'px)';      
    }
    current++;
    if(current != 1) btnLeft.style.display = '';
    if (current == list.length) btnRight.style.display = 'none';
  }); 

  btnLeft.addEventListener('click', function(){
    let currentValue = window.getComputedStyle(innerBox).getPropertyValue('transform').match(/(-?[0-9\.]+)/g)[4];
    if(current > 0){
      if(current != 1) btnRight.style.display = '';
      innerBox.style.transform = 'translateX(' + (+currentValue +  widthSilde) + 'px)';      
    }
    current--;
    if (current == 1) btnLeft.style.display = 'none';
  });
}
