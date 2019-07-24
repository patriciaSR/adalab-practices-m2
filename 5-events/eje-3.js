'use strict';

const lorem = document.querySelector('.lorem');

const addLorem = () => {
  lorem.innerHTML += `
  <p>
    LORELOREEEEEEEEEAAAAAAAAAAAAMMMMM
  </p>
  `
}
lorem.addEventListener('mouseover', addLorem);