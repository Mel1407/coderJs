/*/<--------- Registro -------->

class usuario {
  constructor(usser, pass, correo, nombres, apellidos, materia) {
    this.usser = usser;
    this.pass = pass;
    this.correo = correo;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.materia = materia;
  }
  validar() {
    if (this.usser != " " && this.pass != " ") {
      console.log("Bienvenido al sistema: " + this.usser);
    } else {
      console.log("Error. Intente de nuevo");
    }
  }
}

let listaUsuarios = [];
for (let i = 0; i < 1; i++) {
  let usser = prompt("Ingrese su usuario");
  let pass = prompt("Ingrese su contraseña");
  let correo = prompt("Ingrese su correo");
  let nombres = prompt("Ingrese su nombre/s");
  let apellidos = prompt("Ingrese su apellido/s");
  let materia = prompt("Ingrese su materia");
  listaUsuarios.push(
    new usuario(usser, pass, correo, nombres, apellidos, materia)
  );
}

console.log(listaUsuarios);

for (let usuario of listaUsuarios) {
  if (usuario.validar()) {
    console.log("Bienvenido al sistema" + usser);
  } else {
    console.log("Error");
  }
}

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
}*/
