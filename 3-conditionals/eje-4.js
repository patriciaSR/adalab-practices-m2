'use strict';

let dogYears = parseInt(prompt ('¿Cuántos años tiene el perro?'));
const firstYear = 15;
const secondYear = 9;
const fiveYears = 5;

if (dogYears === 1) {
  console.log (`La edad del perro equivale a ${firstYear} años humanos`);
} else if (dogYears === 2) {
  console.log (`La edad del perro equivale a ${firstYear + secondYear}  años humanos`);
} else {
  console.log (`La edad del perro equivale a ${firstYear + secondYear + ((dogYears - 2)* fiveYears)} años humanos`);
}