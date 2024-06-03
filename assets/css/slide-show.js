const listImage = document.querySelector('.list-img');
const imgs = document.getElementsByTagName('img');
let current = 0;
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');


const handleChangeSlide = ()=> {
  
  if(current == imgs.length -1 ){
    let width = imgs[0].offsetWidth;
    current = 0;
    listImage.style.transform  = `translateX( ${width* -1 *current}px)`;
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.item-'+current).classList.add('active');
  
  }
  else{
    
    current ++
    let width = imgs[0].offsetWidth;
    listImage.style.transform  = `translateX( ${width* -1 *current}px)`;
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.item-'+current).classList.add('active');
  }
    
  
}

let intervalSilde =  setInterval( handleChangeSlide ,3000 );


btnRight.addEventListener('click', ()=> {
  clearInterval (intervalSilde);
  handleChangeSlide();
  intervalSilde = setInterval( handleChangeSlide ,3000 );
})

btnLeft.addEventListener('click', ()=> {
  if(current == 0){
    current = imgs.length -1;
    let width = imgs[0].offsetWidth;
    listImage.style.transform  = `translateX( ${width * -1 *current}px)`;
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.item-'+current).classList.add('active');
  }
  else{
    current --
      let width = imgs[0].offsetWidth;
    listImage.style.transform  = `translateX( ${width * -1 *current}px)`;
    document.querySelector('.active').classList.remove('active')
    document.querySelector('.item-'+current).classList.add('active');
  }

  clearInterval (intervalSilde);
  intervalSilde = setInterval( handleChangeSlide ,3000 );

})