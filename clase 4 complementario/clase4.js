function precioIva(precio) {
  let iva = precio * 0.21;
  precio = precio + iva;
  return iva;
}

let precio = parseInt(prompt("Ingrese el precio de costo del producto"));

let resultado = precio + precioIva(precio);
alert("El precio final del preducto es: " + resultado);
