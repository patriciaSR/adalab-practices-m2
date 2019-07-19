const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const list = document.querySelector('.list');
list.innerHTML = `
<li>
  <img src="${firstDogImage}" alt="${firstDogName}">
  <h2> ${firstDogName}</h2>
</li>
<li>
  <img src="${secondDogImage}" alt="${secondDogName}">
  <h2> ${secondDogName}</h2>
</li>
<li>
  <img src="${thirdDogImage}" alt="${thirdDogName}">
  <h2> ${thirdDogName}</h2>
</li>
`