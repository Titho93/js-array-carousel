const imageCont  = document.querySelector('.imageCont');
const btnNext = document.querySelector('.down');
const btnPrev = document.querySelector('.up');

let counterImg = 0;

const images  = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
];

for (let i = 0; i < images.length; i++){
  const image = images[i];
  imageCont.innerHTML += `<img src="${image}" class= hide item >`;
}

const imageCollect = document.getElementsByClassName ('item');
imageCollect[counterImg].classList.remove('hide');



