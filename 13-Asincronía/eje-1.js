'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.title');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);