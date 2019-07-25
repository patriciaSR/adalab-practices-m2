'use strict';

const pears = {
  max: 10, // Número máximo de peras
  min: 1, // Número mínimo de peras
  actual: 5, // Número actual de peras
  init: 2, // Número inicial de peras

  // Añadir al cesto una pera
  addPear: function() { 
    if (this.actual === this.max) {
      console.error('No puedes añadir más peras :)');
    } else {
    console.log(this.actual += 1);
  }
  },

  // Sacar del cesto una pera
  lessPear: function() {
  if (this.actual === this.min) {
    console.error('No me quites mi última pera :(');
    } else {
    console.log(this.actual -= 1);
    }
  },

  // Restablecer el número de peras al valor inicial.
  resetPear: function() {
    console.log(this.actual = this.init);
  }
}

console.log(pears);

