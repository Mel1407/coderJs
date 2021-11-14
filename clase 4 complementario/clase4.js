function saludar() {
  let usser = prompt("Ingrese su nombre");
  alert("Bienvenido al sistema " + usser);
}

saludar();

let precio = parseInt(prompt("Ingrese el valor de su producto"));
let pago = prompt("Ingrese la forma de pago");
let ciudad = prompt("Ingrese la ciudad de envío");

function financiacion(pago, precio) {
  if (pago == "crédito") {
    let montoFinanciado = precio * 0.15;
    return montoFinanciado;
  } else if (pago == "efectivo" && pago == "débito") {
    let montoFinanciado = precio;
    return montoFinanciado;
  }
}

financiacion();

function costoEnvio(precio, ciudad) {
  if (ciudad == "Cordoba") {
    let envio = precio * 0.1;
    return envio;
  } else if (ciudad == "Buenos Aires") {
    let envio = precio * 0.05;
    return envio;
  }
}

costoEnvio();

let resultado =
  precio + financiacion(pago, precio) + costoEnvio(precio, ciudad);
alert("El precio final es de: " + resultado);
