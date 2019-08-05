'use strict';

const array = [1, 2, 3];
const list = document.querySelector('.list');

for (let i=0; i<3; i++) {
  const newLi = document.createElement('li');
  const newLiText = document.createTextNode(array[i]);
  newLi.appendChild(newLiText);
  list.appendChild(newLi);
}


