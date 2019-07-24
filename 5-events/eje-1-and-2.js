'use strict';
const hi = document.querySelector('.hi');
const btnHi = document.querySelector('.btn-hi');

const changeText = () => {
  hi.innerHTML = 'Ole, ole y ole'
}

btnHi.addEventListener('click', changeText);


//Ejercicio 2


const btn = document.querySelector('.btn');
const input = document.querySelector('.input-text');


const printInput = (event) => {
  // const inputText = input.value;
  console.log(`Hola ${input.value}`);
}

btn.addEventListener('click', printInput);
