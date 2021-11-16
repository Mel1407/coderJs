//<--------- Saludo -------->
//<--------- Login -------->
alert("Por favor, ingrese los datos solicitados");
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

//<--------- Calcular promedio -------->

function prom() {
  let nombre = prompt("Ingrese el nombre completo del alumno");
  let examen1 = parseInt(prompt("Ingrese la nota del 1° examen"));
  let examen2 = parseInt(prompt("Ingrese la nota del 2° examen"));
  let notaFinal = (examen1 + examen2) / 2;
  let promedio = notaFinal;
  alert("La nota promedio de " + nombre + " es: " + promedio);
}

//<--------- Lista de alumnos -------->

class alumno {
  constructor(nombre, matricula, curso, promedio) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.curso = curso;
    this.promedio = promedio;
  }
  promediar() {
    if (this.promedio >= 7) {
      return true;
    } else {
      return false;
    }
  }
}

let listaAlumnos = [];

for (let i = 0; i < 2; i++) {
  let nombre = prompt("Ingrese el nombre completo del alumno:");
  let matricula = prompt("Ingrese su número de matrícula:");
  let curso = prompt("Ingrese su curso:");
  let promedio = prompt("Ingrese el promedio de las notas:");
  listaAlumnos.push(new alumno(nombre, matricula, curso, promedio));
  console.log("Los estudiantes nuevos ingresados son: " + listaAlumnos);
}

for (let alumno of listaAlumnos) {
  if (alumno.promediar()) {
    console.log("El alumno: " + alumno.nombre + "ha aprobado la materia.");
  } else {
    console.log("El alumno: " + alumno.nombre + " no ha aprobado la materia.");
  }
}
