'use strict';
const input = document.querySelector('.user__input');
const btn = document.querySelector('.user__btn');
const list = document.querySelector('.list');




const ENDPOINT = 'https://api.github.com/orgs/'

function getRepos() {
  const orgName = input.value;
  fetch(ENDPOINT + orgName)
    .then(response => response.json())
    .then(data => {
      const reposURL = data.repos_url;
      
      return fetch(reposURL);
    })
    .then(response => response.json())
    .then(data => {
      let reposNames = '';
      for (const repo of data) {
        reposNames += `<li class="list-item">${repo.name}</li>`;
      }
      list.innerHTML = reposNames;
    });
}
btn.addEventListener("click", getRepos);