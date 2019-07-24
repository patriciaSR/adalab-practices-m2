'use strict';
let num1 = 6;
let num2 = 7;
let num3 = 8;
let num4 = 10;

function multi (valor1, valor2) {
  return valor1 * valor2;
}

const resultMulti = multi(num1, num2);
console.log('Resultado de la multiplicación:', resultMulti);

//Ejercicio 2
function media (valor1, valor2,valor3, valor4) {
  return (valor1 + valor2 + valor3 + valor4) / 4;
}

const resultMedia = media(num1, num2, num3, num4);
console.log('Resultado de la media es:', resultMedia);
