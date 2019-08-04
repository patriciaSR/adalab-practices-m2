'use strict';

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false
  }
];

const list = document.querySelector('.list');
const text = document.querySelector('.text');
let tasksList = '';

const tasksInfo = {
total: tasks.length,
completed: 0,
pending: 0
}

for (const task of tasks) {
  if (task.completed) {
    tasksInfo.completed++;
  } 
  const checked = task.completed ? 'checked' : '';
  const completed = task.completed ? 'completed' : '';

  tasksList += `<li class="list-task ${completed}">${task.name}<input type="checkbox" ${checked}></li>`;
}
tasksInfo.pending = tasksInfo.total - tasksInfo.completed;

list.innerHTML = tasksList;
let textResult = `tienes ${tasksInfo.total} tareas. ${tasksInfo.completed} completadas y ${tasksInfo.pending} por realizar. `
text.innerHTML = textResult;

//check funtionality
const inputs = document.querySelectorAll('input[type=checkbox');

function check(event) {
  const inputChecked = event.target;
  if (inputChecked.checked) {
    inputChecked.parentElement.classList.add('completed');
    tasksInfo.completed++;
  } else {
    inputChecked.parentElement.classList.remove('completed');
    tasksInfo.completed--;
  }
  tasksInfo.pending = tasksInfo.total - tasksInfo.completed;

  //Result Text
  textResult = `tienes ${tasksInfo.total} tareas. ${tasksInfo.completed} completadas y ${tasksInfo.pending} por realizar. `;
  return text.innerHTML = textResult;
}

for (const inp of inputs) {
  inp.addEventListener('change', check)
}

