// 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

let productos = [];
for (let i = 1; i <= 5; i++) {
  let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
  productos.push(precio);
}

let descuentos = productos.map((precio, index) => {
  if (index < 2) return precio * 0.05; 
  if (index >= 3) return precio * 0.02; 
  return 0; 
});

let preciosFinales = productos.map((precio, index) => precio - descuentos[index]);
let total = preciosFinales.reduce((acc, precio) => acc + precio, 0);

alert(`Precios finales:
${preciosFinales.map((precio, i) => `Producto ${i + 1}: $${precio.toFixed(2)}`).join("\n")}
Total: $${total.toFixed(2)}`);
