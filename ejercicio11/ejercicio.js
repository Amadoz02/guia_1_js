// 11. Escribir un programa que sume, resta, multiplique y divida dos números.
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

function operaciones(num1, num2) {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
    return (`divicion== ${division} \n suma== ${suma} \n resta== ${resta} \n multiplicacion== ${multiplicacion}`)
}

console.log(operaciones(num1, num2));