'use strict';

const box = document.querySelector('.message-box');
const title = box.querySelector('.message-title');
const text = box.querySelector('.message-text');


if (box.classList.contains('success')) {
  title.innerHTML = 'CORRECTO';
  text.innerHTML = 'Los datos son correctos';
}

if (box.classList.contains('error')) {
  title.innerHTML = 'ERROR';
  text.innerHTML = 'Los datos no son correctos';
}

if (box.classList.contains('warning')) {
  title.innerHTML = 'WARNING';
  text.innerHTML = 'Tenga cuidado';
}