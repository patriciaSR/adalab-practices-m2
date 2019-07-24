'use strict';

const input = document.querySelector('.input-text');
const text = document.querySelector('.text');


const printInput = () => {
  const inputValue = input.value;
  text.innerHTML = inputValue;
}

input.addEventListener('keyup', printInput);
