'use strict';

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const title = document.querySelector('.title');

const btnSelect = (event) => {
  title.innerHTML = event.target.innerHTML;
}

btn1.addEventListener('click', btnSelect);
btn2.addEventListener('click', btnSelect);