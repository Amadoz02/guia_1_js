// 51. Calcular todos los pagos hechos de un restaurante y que si el pagar ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento

let pagar = parseFloat(prompt("Ingrese el pagar del cliente:"));

if (pagar > 130000) {
  let descuento = pagar * 0.15;
  pagar -= descuento;
  alert(`Se aplicó un descuento del 15%  ____  total: $${pagar.toFixed(2)}`);
} else {
  alert(`No hay descuento ___ total: $${pagar}`);
}
