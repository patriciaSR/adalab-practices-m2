'use strict';

const className = 'text';

function getEL(clase) {
  let classFinder = '.' + clase;
  console.log(classFinder);

  const result = document.querySelector(classFinder);
  console.log(result);

  const textContent = parseInt(result.innerHTML);
  console.log(textContent);

  return textContent;

}

const resultGet = getEL(className);

const parImpar = (valor) => {
  if (valor % 2 === 0) {
    console.log(`Este número es par`);

  } else {
    console.log(`Este número es impar`);
  }
}

console.log(parImpar(resultGet));