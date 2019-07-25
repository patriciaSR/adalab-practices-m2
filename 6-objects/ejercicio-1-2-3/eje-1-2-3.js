'use strict';

const adalaber1 = {
    name: 'Susana',
    years: 34,
    profesion: 'periodista',
    run: function() {
        return 'Estoy corriendo';
    }
}
console.log (`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.years} años y soy ${adalaber1.profesion}.`)

const adalaber2 = {
    name: 'Rocío',
    years: 25,
    profesion: 'actriz' 
}
console.log (`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.years} años y soy ${adalaber2.profesion}.`)

//Ejercicio 2
console.log(adalaber1.run());


adalaber1.runAMarathon = distance => console.log(`${adalaber1.run()} una maratón de ${distance} kilómetros`);

console.log(adalaber1.runAMarathon(50));

//Ejercicio 3
adalaber1.name = 'María';
adalaber1.showBio = function() {
    return (`Mi nombre es ${this.name}, tengo ${this.years} años y soy ${this.profesion}.`)
}

adalaber2.showBio = function() {
    return (`Mi nombre es ${this.name}, tengo ${this.years} años y soy ${this.profesion}.`)
}

console.log(adalaber1.showBio());
console.log(adalaber2.showBio());
