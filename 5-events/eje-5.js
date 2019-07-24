'use strict';

const body = document.querySelector('body');

const changeBG = () => {
  console.log(event.keyCode);
  if (event.keyCode === 82) {
    body.classList.remove('green', 'morado');
    body.classList.add('red');
  } else if (event.keyCode === 77) {
    body.classList.remove('green', 'red');
    body.classList.add('morado');
  } else {
    body.classList.remove('morado', 'red');
    body.classList.add('green');
  }
}

body.addEventListener('keyup', changeBG);
