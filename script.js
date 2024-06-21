//variables
let numeroMaximo = 15;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maxIntentos = 10;

console.log(numeroSecreto);

//bucle
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt(`Ingresa un numero de 1 a ${numeroMaximo} por favor:`);

  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    //Acertaste
    alert(
      `Asertaste, el numero es:  ${numeroUsuario}, lo lograste en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }`
    );
    console.log("Correcto");
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert(
        "El numero secreto es menor " +
          `lleva ${intentos} ${intentos == 1 ? "intento" : "intentos"}`
      );
    } else {
      alert(
        "El numero secreto es mayor " +
          `lleva ${intentos} ${intentos == 1 ? "intento" : "intentos"}`
      );
    }
    intentos++;
    console.log(intentos);

    if (intentos > maxIntentos) {
      alert(`Llegaste al numero maximo de ${maxIntentos} intentos`);
      break;
    }
  }
}
