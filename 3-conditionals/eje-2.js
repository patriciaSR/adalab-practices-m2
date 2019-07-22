'use strict';

const name = prompt ('¿Cómo te llamas?');

if (name === 'Patricia' || name === 'Alba') {
  console.log(`Bienvenida ${name}`);
} else {
  console.log('Lo siento pero el usuario que has introducido no está registrado".');
}