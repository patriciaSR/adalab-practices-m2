'use strict';

const timer = document.querySelector('.timer');
let counter = 50;

const incrementAndShowCounter = () => {
  counter++;
};

function updateText () {
  if (counter < 60) {
    timer.innerHTML = `Escrito hace ${counter} segundos`;
  } else if (counter === 60) {
    const min = Math.floor(counter / 60);
    timer.innerHTML = `Escrito hace ${min} minuto`;
  } else {
    const min = Math.floor(counter / 60);
    const sec =  counter % 60;
    timer.innerHTML = `Escrito hace ${min} minutos y ${sec} segundos`;

  }
}

setInterval(incrementAndShowCounter, 1000);
setInterval (updateText, 5000);