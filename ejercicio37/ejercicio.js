// 37. Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos
// Kg transporta?

let pesoCaja = parseFloat(prompt("Ingrese el peso de una caja (kg):"));
let numcaja = parseInt(prompt("Ingrese el numero de cajas:"));

let peso = pesoCaja * numcaja;

alert(`El camion transporta un total de ${peso} kg.`);
