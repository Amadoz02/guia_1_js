// 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%.
let duracion = parseInt(prompt("Ingrese la duracion de la llamada en minutos:"));

let costoMinuto = 355;
let iva = 0.20;
let total = (costoMinuto * duracion) + (iva * (costoMinuto * duracion));

alert(`El total a pagar es: ${total}`);


