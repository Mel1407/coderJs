/* ------nombre usuario + mensaje------*/

let nombreUsuario = prompt("Ingrese su nombre");

console.log("Hola, " + nombreUsuario);

/* ------edad y suma------*/

let numeroA = 50;

let edadUsuario = prompt("Ingrese su edad");

let suma = numeroA + parseInt(edadUsuario);

console.log("El resultado es: " + suma);

/* ------texto y alert------*/

let segundoNombreUsuario = prompt("Ingrese su segundo nombre");
let apellidoUsuario = prompt("Ingrese su apellido");

let mensaje =
  "He registrado sus datos: " + segundoNombreUsuario + apellidoUsuario;

alert(mensaje);
