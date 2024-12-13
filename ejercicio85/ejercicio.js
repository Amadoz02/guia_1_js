function binario(num1, num2) {
    const suma = num1 + num2;
    return suma.toString(2); 
}

const numero1 = parseInt(prompt("Ingresa el  numero 1:"), 10);
const numero2 = parseInt(prompt("Ingresa el  numero 2:"), 10);
alert(`La suma de ${numero1} y ${numero2} en binario es: ${binario(numero1, numero2)}`);
