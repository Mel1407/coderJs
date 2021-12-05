//<--------- Lista de alumnos -------->

let listaAlumnos = [];

class alumno {
  constructor(nombre, apellido, matricula, curso, materia, promedio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
    this.curso = curso;
    this.materia = materia;
    this.promedio = promedio;
  }
}

let newEst = document.getElementById("newEst");

newEst.addEventListener("click", agregarEst);

function agregarEst() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let matricula = document.getElementById("matricula").value;
  let curso = document.getElementById("curso").value;
  let asignatura = document.getElementById("asing").value;
  let parcialUno = document.getElementById("parcialUno").value;
  let parcialDos = document.getElementById("parcialDos").value;

  let nuevoEst = new alumno(
    nombre,
    apellido,
    matricula,
    curso,
    asignatura,
    parcialUno,
    parcialDos
  );
  listaAlumnos.push(nuevoEst);

  let usserJSON = JSON.stringify(listaAlumnos);
  localStorage.setItem("1", usserJSON);
}

let lista = document.getElementById("lista");
lista.addEventListener("click", mostrarLista);

function mostrarLista() {
  let datosReg = JSON.parse(localStorage.getItem("1"));
  let data = "";
  for (let usuario of datosReg) {
    data += `<p>Nombre: ${usuario.nombre}<p>
    <p>Apellido: ${usuario.apellido}<p>
    <p>Matícula: ${usuario.matricula}<p>
    <p>Curso: ${usuario.curso}<p>
    <p>Asignatura: ${usuario.asignatura}<p>
    <p>Nota parcial 1: ${usuario.parcialUno}<p>
    <p>Nota parcial 2: ${usuario.parcialDos}<p>`;
  }
  document.body.innerHTML = data;
}
