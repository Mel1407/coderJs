alert("Bienvenido. Por favor, ingrese los datos solicitados");
let usser = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");

function asistente(nombre) {
  this.nombre = nombre;
  this.saludar = function () {
    alert("Su asistente " + this.nombre + " le da la bienvenida al sistema");
  };
}

let asistenteDocente = new asistente("asistente docente");
asistenteDocente.saludar();

function prom() {
  let nombre = prompt("Ingrese el nombre completo del alumno");
  let examen1 = parseInt(prompt("Ingrese la nota del 1° examen"));
  let examen2 = parseInt(prompt("Ingrese la nota del 2° examen"));
  let notaFinal = (examen1 + examen2) / 2;
  let promedio = notaFinal;
  alert("La nota promedio de " + nombre + " es: " + promedio);
}
