// 4. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
// o impar.

let numero = parseInt(prompt("Ingrese un numero entero: "));

if (numero % 2 === 0) {
    console.log(`${numero} es par`);
} else {
    console.log(`${numero} es impar`);  
}
