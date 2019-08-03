'use strict';

const btns = document.querySelectorAll('.btn');
const body = document.querySelector('body');

for (let i=0; i<btns.length; i++){
  let btn = btns[i];
  btn.addEventListener('click', changeColor)
}

function changeColor() {
 body.classList.toggle('red');
}