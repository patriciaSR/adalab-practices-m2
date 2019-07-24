'use strict';
const list = document.querySelector('.teachers');
const teacher1 = list.querySelector('.teacher--isra')
const teacher2 = list.querySelector('.teacher--tuerto')
const teacher3 = list.querySelector('.teacher--nasi')

const selected = (event) => {
  const selectedTeacher = event.currentTarget;
  const div = selectedTeacher.querySelector('.favorite');


  selectedTeacher.classList.toggle('teacher--selected');

  if (selectedTeacher.classList.contains('teacher--selected')) {
    div.innerHTML = 'Quitar';
  } else {
    div.innerHTML = 'Añadir';
  }
}

teacher1.addEventListener('click', selected);
teacher2.addEventListener('click', selected);
teacher3.addEventListener('click', selected);
