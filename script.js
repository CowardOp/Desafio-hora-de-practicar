//variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Ingresa un numero de 1 a 10 por favor:");

console.log(numeroUsuario);

/* 
Este codigo realiza la comparacion
*/

if (numeroUsuario == numeroSecreto) {
  //Acertaste
  alert(`Asertaste, el numero es: ${numeroUsuario}`);
  console.log("Correcto");
} else {
  //Incorrecto
  alert("Incorrecto");
  console.log("Incorrecto");
}
