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

/*let listaUsuarios = [];

class usuariosReg {
  constructor(usuario, pass) {
    this.usuario = usuario;
    this.pass = pass;
  }
}

let botonIngreso = document.getElementById("botonI");
boton.addEventListener("click");*/

//<--------- Formulario Registro -------->
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

const validarPass2 = () => {
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

  if (campos.usserReg && campos.passReg && campos.mailReg) {
    formulario2.reset();
  }
});

/*
window.addEventListener("load", () => {
  const formulario = document.querySelector("#form2");
  const usuario = document.querySelector("#usser");
  const email = document.querySelector("#mail");
  const pass = document.querySelector("#passReg");
  const passConf = document.querySelector("#passReg2");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
  });
  const validar = () => {
    const usuarioValor = usuario.value.trim();
    const emailValor = email.value.trim();
    const passValor = pass.value.trim();
    const passConfValor = passConf.value.trim();

    if (!emailValor) {
      validaFalla(email, "Campo vacío");
    } else if (!validaEmail(emailValor)) {
      validaFalla(email, "El e-mail no es válido");
    } else {
      validaOk(email);
    }
    //validando campo password
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;
    if (!passValor) {
      validaFalla(pass, "Campo vacío");
    } else if (passValor.length < 8) {
      validaFalla(pass, "Debe tener 8 caracteres cómo mínimo.");
    } else if (!passValor.match(er)) {
      validaFalla(pass, "Debe tener al menos una may., una min. y un núm.");
    } else {
      validaOk(pass);
    }

    //validando campo password Confirmación
    if (!passConfirmaValor) {
      validaFalla(passConfirma, "Confirme su password");
    } else if (passValor !== passConfirmaValor) {
      validaFalla(passConfirma, "La password no coincide");
    } else {
      validaOk(passConfirma);
    }
  };

  const validaFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = msje;

    formControl.className = "form-control falla";
  };
  const validaOk = (input, msje) => {
    const formControl = input.parentElement;
    formControl.className = "form-control ok";
  };

  const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
});
*/
