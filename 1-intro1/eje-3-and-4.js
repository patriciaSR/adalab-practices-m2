'use strict';

//ejercicio 3
const hello = document.querySelector('.hello');

hello.innerHTML = hello.innerHTML + ' mundo';

//ejercicio 4
const adalaberWinner = document.querySelector('.adalaber');
const adalaber1 = document.querySelector('.list-option:nth-child(1)');
const adalaber2 = document.querySelector('.list-option:nth-child(2)');

adalaberWinner.innerHTML = adalaberWinner.innerHTML + adalaber2.innerHTML;