'use strict';

// //Fase 1
// function ten() {
//   for(let i=0; i<10; i++){
//     console.log('Patata');
//   }
// }

//Fase 2
function ten(word) {
  for(let i=0; i<10; i++){
    console.log(word);
  }
}

//Fase 3
function writeThis(word, num) {
  for(let i=0; i<num; i++){
    console.log(word);
  }
}

//Fase 4
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//opción 1: definir una variable para almacenar un nº aleatorio
function writeThisRandom(word) {
  let randomNumber = getRandomNumber(10);
  for(let i=0; i<randomNumber; i++){
    console.log(word);
  }
}

//opción 2 : llamar a la función como parámetro
function writeThisRandom(word, num) {
  for(let i=0; i<num; i++){
    console.log(word);
  }
}

//fase 5
const myWordList =  [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];

function writeMyArray(arr) {
  for (const data of arr) {
    writeThis(data.text, data.total);
  }
}

//fase 6
const ENDPOINT = 'https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js';

fetch(ENDPOINT)
  .then(function(response) {
    console.log(response);
    return response.json();
    
  })
  .then(function(data) {
    console.log(data.results);
    writeMyArray(data.results)
  });