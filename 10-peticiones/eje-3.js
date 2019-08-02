'use strict';
const input = document.querySelector('.user__input');
const btn = document.querySelector('.user__btn');

const ENDPOINT = 'https://api.github.com/users/'

function getUser() {
  const userName = input.value;
  fetch(ENDPOINT + userName)
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
      // text.innerHTML = data.result;
    });
}
btn.addEventListener("click", getUser);