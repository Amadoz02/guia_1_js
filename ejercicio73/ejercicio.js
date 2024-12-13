// 73. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase.

const regex = /^[a-zA-Z]$/; 
let frase = prompt("Ingrese una palabra o frase:");
let letra;

do {
  letra = prompt("Ingrese la letra a buscar:");
  if (!regex.test(letra) || letra.length !== 1) {
    alert("Por favor, ingrese una sola letra válida (a-z o A-Z).");
  }
} while (!regex.test(letra) || letra.length !== 1);

let contador = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i].toLowerCase() === letra.toLowerCase()) {
    contador++;
  }
}

alert(`La letra "${letra}" aparece ${contador} veces en la frase: "${frase}".`);
