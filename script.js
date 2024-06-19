alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = "Lina";
let edad = 25;

let numeroDeVentas = 50;
let saldoDisponinles = 1000;

alert("¡Error! Completa todos los campos");

var mensajeDeError = "¡Error! Completa todos los campos";

alert(mensajeDeError);

nombre = prompt("Por favor, ingresa tu nombre:");

edad = prompt("Por favor, ingresa tu edad:");

if (edad >= 18) {
  alert("¡Puedes obtener tu licencia de conducir!");
}else{
    alert("Aun eres menor de edad")
}
