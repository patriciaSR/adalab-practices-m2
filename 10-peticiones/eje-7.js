'use strict';

const dogs = document.querySelector('.perretes');

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());

function getBreedImages () {
  const promises = [createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise()];
  Promise.all(promises)
    .then(responses => {
      for (let i = 0; i < responses.length; i++) {
        const img = document.createElement('img');
        img.src = responses[i].message;
        img.alt = `perrete-${i+1}`;
        img.style.width = '150px';
        dogs.appendChild(img);
      }
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);