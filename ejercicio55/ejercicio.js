// 55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento

let tipoMembresia = prompt("Ingrese el tipo de membresia (A, B, C):").toUpperCase();
let montoCompra = parseFloat(prompt("Ingrese el monto de la compra:"));

let descuento = tipoMembresia === "A" ? 0.1 : tipoMembresia === "B" ? 0.15 : 0.2;
let total = montoCompra * (1 - descuento);

alert(`El descuento aplicado fue del ${descuento * 100}%. Total: $${total.toFixed(2)}`);
