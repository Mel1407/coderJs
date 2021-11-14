function saludar() {
  let usser = prompt("Ingrese su nombre");
  alert("Bienvenido al sistema " + usser);
}

saludar();

function financiacion(pago, precio) {
  if (pago == "Crédito") {
    let montoFinanciado = precio * 0.15;
    return montoFinanciado;
  } else if (pago == "Efectivo") {
    let montoFinanciado = precio * 1;
    return montoFinanciado;
  }
}

function costoEnvio(precio, ciudad) {
  if (ciudad == "Córdoba") {
    let envio = precio * 0.1;
    return envio;
  } else if (ciudad == "Buenos Aires") {
    let envio = precio * 0.15;
    return envio;
  }
}

let precio = prompt("Ingrese el valor de su producto");
let pago = prompt("Ingrese la forma de pago");
let ciudad = prompt("Ingrese la ciudad de envío");

let resultado =
  parseInt(precio) +
  parseInt(financiacion(pago, precio)) +
  parseInt(costoEnvio(precio, ciudad));
alert("El precio final es de: " + resultado);
