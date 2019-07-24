//referencia a los elementos
const strawberry = document.querySelector('.fruit-strawberry');
const banana = document.querySelector('.fruit-banana');
const kiwi = document.querySelector('.fruit-kiwi');
const btn = document.querySelector('.button');

//función 
function changeColor(event) {
  // Asignamos a una constante el elemento
  // sobre el que pusimos el `listener`
  // para trabajar cómodamente con él
  const selectedFruit = event.currentTarget.innerHTML;
  btn.classList.remove ('fresa');
  btn.classList.remove ('banana')
  btn.classList.remove ('kiwi')
  
  btn.classList.add(selectedFruit);
  //selectedFruit.classList.toggle('fruit--selected');
}

//listeners
strawberry.addEventListener('click', changeColor);
banana.addEventListener('click', changeColor);
kiwi.addEventListener('click', changeColor);