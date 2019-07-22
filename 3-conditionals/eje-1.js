'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

//Opción 1
const image = document.querySelector('.user__avatar').src = (userAvatar || DEFAULT_AVATAR);

//Opción 2
const image2 = document.querySelector('.user__avatar').setAttribute("src", userAvatar || DEFAULT_AVATAR);

//Opción 3
