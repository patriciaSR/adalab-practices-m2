'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

let parNumbers = [];
let multipleNumbers = [];
let newLostNumber= [];

function bestLostNumber() {
for (const items of lostNumbers) {
  if (items % 2 === 0) {
    parNumbers.push(items);
    console.log(parNumbers);
  } else if (items % 3 === 0) {
    multipleNumbers.push(items);
    console.log(multipleNumbers);
  }
}
return newLostNumber.concat(parNumbers, multipleNumbers);
}

console.log(bestLostNumber());