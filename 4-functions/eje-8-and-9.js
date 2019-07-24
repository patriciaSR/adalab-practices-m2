// modificamos una variable de ámbito global
// let secretLetter = 'y';

// function mySecretLetter() {
//   secretLetter = 'xaaaa';
//   return secretLetter;
// }


// console.log(mySecretLetter()); // devuelve "x"
// console.log(secretLetter); // devuelve "x"

//Ejercicio 9

const mySecretLetter2 = () => {
  let secretLetter = 'arrow';
  return secretLetter;
}
console.log(mySecretLetter2());
