'use strict';

const age = document.querySelector('.age');
const day = document.querySelector('.day');
const year = document.querySelector('.year');

const yearHours = parseInt(day.innerHTML) * parseInt(year.innerHTML);
console.log(`Un año tiene ${yearHours} horas`);

const totalHours = yearHours * parseInt(age.innerHTML);
console.log(`He vivido ${totalHours} horas`);
  