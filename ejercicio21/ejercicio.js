// 21. Escribir un programa que calcule el volumen de un elipsoide

let a = parseFloat(prompt("Ingrese el valor de 'a' del elipsoide: "));
let b = parseFloat(prompt("Ingrese el valor de 'b' del elipsoide: "));
let c = parseFloat(prompt("Ingrese el valor de 'c' del elipsoide: "));

let volumen = (4/3) * Math.PI * a * b * c;

console.log(`El volumen del elipsoide es: ${volumen}`);

