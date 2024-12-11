// 39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.

let preciomc = parseFloat(prompt("Ingrese el precio por metro cuadrado:"));
let mcuadrados = parseFloat(prompt("Ingrese los metros cuadrados a pintar:"));

let presupuesto = preciomc * mcuadrados;

alert(`El presupuesto para pintar ${mcuadrados} m² es de $${presupuesto.toFixed(2)}.`);
