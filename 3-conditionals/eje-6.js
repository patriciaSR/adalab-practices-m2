'use strict';


let avocados;
const avocadoPrice = 1.5;
const money = 33;

// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }

//Escribir con ternarios el código comentado arriba
avocados = (money >= avocadoPrice) ? money/avocadoPrice : 0;
console.log(avocados);