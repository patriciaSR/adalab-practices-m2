'use strict';
const priceBase = parseInt(prompt('¿Cuál es el precio sin iva?'));
const iva = 0.21;


function ivaCalc(price) {
  const priceIva = price * iva;
  const priceFinal = priceIva + priceBase;

  return `Precio sin IVA: ${priceBase}, IVA: ${priceIva} y Total: ${priceFinal}`;

}

const result = ivaCalc(priceBase);
console.log(result);

//Ejercicio 4
const number = parseInt(prompt('Introduce un número'));

const parImpar = (valor) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(parImpar(number));