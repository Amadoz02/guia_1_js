// 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento

let consumo = parseFloat(prompt("Ingrese el consumo del cliente:"));

if (consumo > 130000) {
  let descuento = consumo * 0.15;
  consumo -= descuento;
  alert(`Se aplicó un descuento del 15%. Total: $${consumo.toFixed(2)}`);
} else {
  alert(`No hay descuento. Total: $${consumo}`);
}
