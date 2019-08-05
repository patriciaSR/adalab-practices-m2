'use strict';

const ENDPOINTdogsList = 'https://dog.ceo/api/breeds/list/all';
const ENDPOINTnumber = 'https://api.rand.fun/number/integer?max=';

let dogArrNames = [];
let totalImgs = [];

fetch(ENDPOINTdogsList)
  .then(response => response.json())
  .then(data => {
    const dogListNames = data.message;
    dogArrNames = Object.keys(dogListNames);
    return dogArrNames.length;
  })
  .then(numBreeds =>
    fetch(`${ENDPOINTnumber}${numBreeds}`)
  )
  .then(response => response.json())
  .then(data => {
    const randomNumber = data.result;
    return dogArrNames[randomNumber];
  })
  .then((breed) => {
    renderDogName(breed);
    const ENDPOINTdogsImages = `https://dog.ceo/api/breed/${breed}/images`;
    return fetch(ENDPOINTdogsImages);
  })
  .then(response => response.json())
  .then(data => {
    totalImgs = data.message;
    return totalImgs.length;
  })
  .then(numImgs =>
    fetch(`${ENDPOINTnumber}${numImgs}`)
  )
  .then(response => response.json())
  .then(data => {
    const randomNumber2 = data.result;
    return totalImgs[randomNumber2];
  })
  .then(imgDog => renderDogImg(imgDog));


function renderDogName(breed) {
  const text = document.createElement('p');
  const textContent = document.createTextNode(`La raza de perro es ${breed}`);
  text.appendChild(textContent);
  document.querySelector('body').appendChild(text);
}

function renderDogImg(imgDog) {
  const img = document.createElement('img');
  img.src = imgDog;
  img.alt = `perrete lindo`;
  document.querySelector('body').appendChild(img);
}

