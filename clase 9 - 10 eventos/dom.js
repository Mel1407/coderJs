//<--------- Registro -------->

let formulario = document.getElementById("form");

formulario.addEventListener("submit", singup);

function singup(e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let correo = document.getElementById("mail");
  let tel = document.getElementById("tel");
  let asignatura = document.getElementById("asig");
  let contrasena = document.getElementById("pass");
  console.log("Usuario: " + nombre.value + apellido.value);
  console.log("Contraseña: " + contrasena.value);
  console.log("Datos registrados");
}

//<--------- Login -------->

let usserAdm = "Melisa";
let passAdm = 1234;

function validar() {
  let usser = document.getElementById("usser");
  let pass = document.getElementById("pass");
  let mensaje = document.getElementById("mensajeLogin");

  if (usser.value == usserAdm && pass.value == passAdm) {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Bienvenida al sistema";
    mensaje.appendChild(parrafo);
  } else {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Datos incorrectos. Intente de nuevo.";
    mensaje.appendChild(parrafo);
  }
}

/*/<--------- Calcular promedio -------->

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
  constructor(nombre, matricula, curso, materia, promedio) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.curso = curso;
    this.materia = materia;
    this.promedio = promedio;
  }
  promediar() {
    if (this.promedio >= 7) {
      return true;
    } else this.promedio < 7;
    return false;
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

console.log(listaAlumnos);
alumno.promediar();

for (let alumno of listaAlumnos) {
  if (alumno.promediar() == true) {
    console.log("El alumno: " + alumno.nombre + "ha aprobado la materia.");
  } else alumno.promediar() == false;
  console.log("El alumno: " + alumno.nombre + " no ha aprobado la materia.");
}
*/
