const imageCont  = document.querySelector('.imageCont');
const btnNext = document.querySelector('.down');
const btnPrev = document.querySelector('.up');
const thumb = document.querySelector('.thumb');

btnPrev.classList.add('hide');

let counterImg = 0;

const images  = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

for (let i = 0; i < images.length; i++){
  const image = images[i];
  imageCont.innerHTML += `<img src="${image}" class="item hide">`;
}


const imageCollect = document.getElementsByClassName('item');

imageCollect[counterImg].classList.remove('hide'); 

btnNext.addEventListener('click', function(){
  imageCollect[counterImg].classList.add('hide');
  counterImg++;
  imageCollect[counterImg].classList.remove('hide');
  btnPrev.classList.remove('hide');
  
  if(counterImg === imageCollect.length - 1){
    btnNext.classList.add('hide');
  }

})

btnPrev.addEventListener('click', function(){
  imageCollect[counterImg].classList.add('hide');
  counterImg--;
  imageCollect[counterImg].classList.remove('hide');

  btnNext.classList.remove('hide')

  if(counterImg === 0){
    btnPrev.classList.add('hide');
  }
})