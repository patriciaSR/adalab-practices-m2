'use strict';

const classUser = prompt('¿Qué clase quieres buscar?');

function getEL(clase) {
  let classFinder = '.' + clase;
  console.log(classFinder);

  const result = document.querySelector(classFinder);
  console.log(result);

  if (result === null) {
    alert('La clase introducida no es correcta');
    console.error(`No existe ningún elemento con clase, id o tag llamado ${classUser}`);
  } else {
    result.classList.add('green');
    console.log(`La clase seleccionada se sombrea en verde`)
  }
}

console.log(getEL(classUser));
