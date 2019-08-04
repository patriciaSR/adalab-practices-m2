'use strict';

const btn = document.querySelector('.btn');

function chooseDog(type) {
  return fetch(`https://dog.ceo/api/breed/${type}/images/random`)
  .then(response => response.json());
}

function updateDog(data) {
  const img = document.querySelector(".dog__img");
  img.src = data.message;
  img.alt = "Un perro";
}

btn.addEventListener('click', () => {
  const dogPromise = chooseDog('chihuahua');
  
  dogPromise.then(data => {
    updateDog(data);
  });
});