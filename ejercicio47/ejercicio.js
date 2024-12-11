// 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.

let numeros = [];
for (let i = 1; i <= 3; i++) {
  numeros.push(parseFloat(prompt(`Ingrese el número ${i}:`)));
}

let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);
let sonIguales = numeros.every((num) => num === numeros[0]);

if (sonIguales) {
  alert("Los números son iguales.");
} else {
  alert(`Mayor: ${mayor}, Menor: ${menor}`);
}
