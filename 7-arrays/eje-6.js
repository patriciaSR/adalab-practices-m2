'use strict';

const submit = document.querySelector('.submit');
const movie1 = document.getElementById('movie-1');
const movie2 = document.getElementById('movie-2');
const text = document.querySelector('.text');

function sentMovies() {
  const movieInfo = [movie1.value, movie2.value];
  let resultText = "";
  for (const movie of movieInfo) {
    resultText += `<p>¡A mí también me encantó ${movie} Tenemos mucho en común, humana."</p>`
  }
  text.innerHTML = resultText;
}

submit.addEventListener('click', sentMovies)