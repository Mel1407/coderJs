//<--------- Animación Login -------->

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container__log");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//<--------- Formulario Inicio -------->

//<--------- Formulario Registro -------->

//<--------- Formulario Registro / Validación de datos -------->
let formulario2 = document.getElementById("form2");
let inputs = document.querySelectorAll("#form2 input");
let expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

let campos = {
  usuario: false,
  password: false,
  correo: false,
};

let validarFormulario = (e) => {
  switch (e.target.name) {
    case "usserReg":
      if (expresiones.usuario.test(e.target.value)) {
        document
          .getElementById("group_usserReg")
          .classList.remove("formGroup-false");
        document
          .getElementById("group_usserReg")
          .classList.add("formGroup-true");
        campos["usserReg"] = true;
      } else {
        document
          .getElementById("group_usserReg")
          .classList.add("formGroup-false");
      }
      break;
    case "mailReg":
      if (expresiones.correo.test(e.target.value)) {
        document
          .getElementById("group_mailReg")
          .classList.remove("formGroup-false");
        document
          .getElementById("group_mailReg")
          .classList.add("formGroup-true");
        campos["mailReg"] = true;
      } else {
        document
          .getElementById("group_mailReg")
          .classList.add("formGroup-false");
      }
      break;
    case "passReg":
      if (expresiones.password.test(e.target.value)) {
        document
          .getElementById("group_passReg")
          .classList.remove("formGroup-false");
        document
          .getElementById("group_passReg")
          .classList.add("formGroup-true");
        campos["passReg"] = true;
      } else {
        document
          .getElementById("group_passReg")
          .classList.add("formGroup-false");
        document
          .getElementById("group_passReg")
          .classList.remove("formGroup-true");
      }
      break;
    case "passReg2":
      validarPass2();
  }
};

let validarPass2 = () => {
  let inputpassReg1 = document.getElementById("passReg");
  let inputpassReg2 = document.getElementById("passReg2");

  if (inputpassReg1.value !== inputpassReg2.value) {
    document.getElementById("group_passReg2").classList.add("formGroup-false");
    document
      .getElementById("group_passReg2")
      .classList.remove("formGroup-true");
    campos["passReg2"] = false;
  } else {
    document
      .getElementById("group_passReg2")
      .classList.remove("formGroup-false");
    document.getElementById("group_passReg2").classList.add("formGroup-true");
    campos["passReg2"] = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario2.addEventListener("submit", (e) => {
  e.preventDefault();

  let term = document.getElementById("term");

  if (
    campos.usserReg &&
    campos.passReg &&
    campos.mailReg &&
    campos.passReg2 &&
    term.checked
  ) {
    formulario2.reset();
    document
      .getElementById("form2__msg-exito")
      .classList.add("form2__msg-exito-activo");
    setTimeout(() => {
      document
        .getElementById("form2__msg-exito")
        .classList.remove("form2__msg-exito-activo");
    }, 5000);
    document.querySelectorAll(".formGroup-true").forEach((icono) => {
      icono.classList.remove("formGroup-true");
      document
        .getElementById("form2__msg-error")
        .classList.remove("form2__msg-error-activo");
    });
  } else {
    document
      .getElementById("form2__msg-error")
      .classList.add("form2__msg-error-activo");
  }
});

//<--------- Formulario Registro / Guardar datos -------->

const baseDatos = [];
let inputValues = {
  usserReg: "",
  passReg: "",
  mailReg: "",
  passReg2: "",
};

let handleInput = (e) => {
  inputValue = {
    ...inputValue,
    [e.target.usserReg]: e.target.value,
  };
};

let handleSubmit = (e) => {
  e.preventDefault();

  baseDatos.push(inputValue);
};

formulario2.addEventListener("submit", handleSubmit);

inputs.forEach((input) => input.addEventListener("input", handleInput));
