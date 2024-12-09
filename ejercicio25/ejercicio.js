// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.

let costo = parseFloat(prompt("Ingrese el costo de los medicamentos:"));

let descuento = costo * 0.10;
let precioFinal = costo - descuento;

console.log(`El precio final de los medicamentos con descuento es: ${precioFinal}`);
