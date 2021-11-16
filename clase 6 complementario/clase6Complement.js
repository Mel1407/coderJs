//Organizar nombres por medio de una función registro

class alumnosCuartoB {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  ordenar() {
    listaAlumnosCuartoB.sort((a, b) => {
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
      return 1;
    });
  }
}

let listaAlumnosCuartoB = [];
for (let i = 0; i < 2; i++) {
  let nombre = prompt("Ingrese el nombre completo del alumno:");
  let edad = parseInt(prompt("Ingrese la edad"));
  listaAlumnosCuartoB.push(new alumnosCuartoB(nombre, edad));
}

console.log("Los alumnos cargados en 4° B son: " + listaAlumnosCuartoB);

/*
let listaAlumnosCuartoB = [
  ["Maximiliano Gomez", 16],
  ["Lorena Sanchez", 15],
  ["Sofía Cruz", 16],
  ["Lucas Herrera", 16],
];
listaAlumnosCuartoB.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});
console.log(listaAlumnosCuartoB);*/
