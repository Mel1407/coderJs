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

//<--------- Formulario Registro -------->

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
