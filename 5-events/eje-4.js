'use strict';

const div = document.querySelector('.lorem');

function scrollColor() {
  console.log(window.scrollY);
  if (window.scrollY < 550) {
    div.classList.add('red');

  } else {
    div.classList.add('green');
    div.classList.remove('red');

  }
}
window.addEventListener('scroll', scrollColor);

