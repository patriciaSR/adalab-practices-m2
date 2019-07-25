'use strict';

const btn = document.querySelector('.btn');

function log (event) {
  console.log(event.target);
}

btn.addEventListener('click', log);
