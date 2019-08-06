'use strict';
const btn = document.querySelector('.btn');
const text = document.querySelector('.result-text');


function getInteger() {
  fetch("https://api.rand.fun/number/integer?max=100")
    .then(response => response.html())
    .then(data => {
      console.log(data.result);
      text.innerHTML = data.result;
    })
    .catch(error => console.error(`Ha sucedido un error: ${error}`));
}
btn.addEventListener("click", getInteger);