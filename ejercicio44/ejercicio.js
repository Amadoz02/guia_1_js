// 44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda

const DOLAR = 4300; 
const EURO = 4700; 

let pesos = parseFloat(prompt("Ingrese la cantidad en pesos:"));

let dolares = pesos / DOLAR;
let euros = pesos / EURO;

alert(`Equivalente en dólares: $${dolares.toFixed(2)}
Equivalente en euros: €${euros.toFixed(2)}`);
