'use strict';

const age = 26;
const day = 24;
const year = 365;

const yearHours = day * year;
console.log(`Si un año tiene ${yearHours} horas`);

const yearNumber = document.querySelector('.year-number');
yearNumber.innerHTML = `Si un año tiene ${yearHours} horas...`;


const totalHours = yearHours * age;
console.log(`He vivido ${totalHours} horas`);

const totalNumber = document.querySelector('.total-number');
totalNumber.innerHTML = `He vivido ${totalHours} horas 😱😱`;