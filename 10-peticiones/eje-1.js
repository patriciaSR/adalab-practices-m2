'use strict';
const btn = document.querySelector('.btn');
const text = document.querySelector('.result-text');


function getInteger() {
  fetch("https://api.rand.fun/number/integer?max=100")
    .then(response => response.json())
    .then(data => {
      console.log(data.result);
      text.innerHTML = data.result;
    });
}
btn.addEventListener("click", getInteger);