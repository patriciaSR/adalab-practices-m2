'use strict';
const input = document.querySelector('.user__input');
const btn = document.querySelector('.user__btn');
const name = document.querySelector('.user__name');
const img = document.querySelector('.user__img');
const repos = document.querySelector('.repository__text');




const ENDPOINT = 'https://api.github.com/users/'

function getUser() {
  const userName = input.value;
  fetch(ENDPOINT + userName)
    .then(response => response.json())
    .then(data => {
      name.innerHTML = data.name;
      img.src = data.avatar_url;
      repos.innerHTML = data.public_repos;
    });
}
btn.addEventListener("click", getUser);