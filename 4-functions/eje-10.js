const boolean = 'border-box';
let width = 30;
let padding = 10;
let border = 2;

const borderBox = () => {
  if (boolean === 'border-box') {
    const widthResult = width - padding - (border * 2);
    console.log(`El ancho del contenido es ${widthResult}`); 
  } else {
    const widthResult = width + padding + (border * 2);
    console.log(`El ancho del contenido es ${widthResult}`); 
  }
}

console.log(borderBox(boolean, width, padding, border));


