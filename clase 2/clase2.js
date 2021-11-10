let numeroUno = parseInt(prompt("Ingrese un número"));
let numeroDos = parseInt(prompt("Ingrese otro número"));

let suma = parseInt(numeroUno) + parseInt(numeroDos);

if (suma > 100) {
  alert("La suma es mayor a 100: " + suma);
} else if (suma < 100) {
  alert("La suma es menor a 100: " + suma);
} else {
  alert("La suma es igual a 100: " + suma);
}
