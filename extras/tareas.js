'use strict';

const list = document.querySelector('.list');
const text = document.querySelector('.text');

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  }, 
];

function drawTask(task) {
  const liClass = task.completed ? 'line-through' : '';
  const checked = task.completed ? 'checked' : '';
  const checkbox = `<input type="checkbox" ${checked}>`;
  list.innerHTML += `<li class="list__option ${liClass}">${checkbox} ${task.name}</li>`;
}

function updateInfo(){
  const taskNumber = tasks.length;
  const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked').length;
  const notCheckedInputs = taskNumber - checkedInputs;

  text.innerHTML = `Tienes ${taskNumber} tareas. ${checkedInputs} completadas y ${notCheckedInputs} por realizar.`
}

function change(event) {
 if (event.currentTarget.checked) {
   event.currentTarget.parentElement.classList.add('line-through');
 } else {
  event.currentTarget.parentElement.classList.remove('line-through');
 }
 updateInfo();
}

for (let i=0; i<tasks.length;i++) {
  const task = tasks[i];
  drawTask(task);
}
updateInfo();

const inputs = document.querySelectorAll('input[type="checkbox"]');
for (const input of inputs) {
  input.addEventListener('click', change);
}



// El .innerHTML coge todo el texto y lo pinta(renderiza) como contenido
// del elemento html, causando que todos los listener que tuviese el 
// contenido se borren, debido a que el contenido ha cambiado 
