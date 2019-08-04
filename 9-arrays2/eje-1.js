'use strict';

let numbersArray = [];

function get100Numbers() {
  for (let i=1; i<=100; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}

//Ejercicio 2
function getReversed100Numbers(){
  get100Numbers().reverse();
  return numbersArray;
}