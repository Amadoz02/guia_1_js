// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas

let tipoEmpleado = prompt("Ingrese el tipo de empleado (P para planta, A para administrativo):").toUpperCase();
let horas = parseFloat(prompt("Ingrese las horas trabajadas:"));

let tarifa = tipoEmpleado === "P" ? 20000 : 10000;
let pago = horas * tarifa;

alert(`El pago total es: $${pago}`);
