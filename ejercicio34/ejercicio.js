// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.

let radio = parseFloat(prompt("Ingrese el radio en metros del deposito:"));
let altura = parseFloat(prompt("Ingrese la altura en metros del deposito:"));
let caudal = parseFloat(prompt("Ingrese el caudal (m3s)"));

const PI = Math.PI;
let volumen = PI * Math.pow(radio, 2) * altura;
let tiempo = volumen / caudal;
let tiempoMinutos = tiempo / 60;

alert(`El tiempo estimado para llenar el depósito es de ${tiempoMinutos.toFixed(2)} minutos.`);
