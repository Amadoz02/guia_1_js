// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.
let numeros = [];
for (let i = 1; i <= 3; i++) {
  numeros.push(parseFloat(prompt(`Ingrese el número ${i}:`)));
}

let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);
let iguales = numeros.every((num) => num === numeros[0]);

if (iguales) {
  alert("Los números son iguales.");
} else {
  alert(`Mayor: ${mayor}, Menor: ${menor}`);
}
