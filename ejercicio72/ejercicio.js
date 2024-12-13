// 72. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
// una las letras de la palabra introducida empezando por la última.


let frase = prompt("Ingrese una frase o palabra");
let fraseInvertida = "";

for (let i = frase.length - 1; i >= 0; i--) {
  fraseInvertida += frase[i];
  console.log(frase[i]);
}

alert(`Frase o palabra invertida: ${fraseInvertida}`);
