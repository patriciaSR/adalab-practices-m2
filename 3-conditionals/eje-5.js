'use strict';

const box = document.querySelector('.message-box');
const tittle = document.querySelector('.message-tittle');
const text = document.querySelector('.message-text');

const correcto = "CORRECTO";
const datosCorrectos = "Los datos son correctos";

if (box.classList.contains('success')) {
} else {
  box.classList.add('success');
  tittle.innerHTML = correcto;
  text.innerHTML = datosCorrectos;
}

if (box.classList.contains('error')) {
} else {
  box.classList.add('error');
  tittle.innerHTML = "ERROR";
  text.innerHTML = "Los datos no son correctos";
}

if (box.classList.contains('.warning')) {
} else {
  box.classList.add('warning');
  tittle.innerHTML = "WARNING";
  text.innerHTML = "Tenga cuidado";
}