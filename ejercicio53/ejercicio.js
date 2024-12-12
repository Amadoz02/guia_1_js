// 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

let productos = [];
for (let i = 1; i <= 5; i++) {
  let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
  productos.push(precio);
}

let subtotal = productos.reduce((a, precio) => a + precio, 0);
let iva = subtotal * 0.19;
let total = subtotal + iva;

alert(`Subtotal: $${subtotal.toFixed(2)}
IVA: $${iva.toFixed(2)}
Total: $${total.toFixed(2)}`);
