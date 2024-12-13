function sumpositivo(...numeros) {
    const suma = numeros.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
    return suma || 0;
}

// Solicitud de datos
const numeros = prompt("Ingresa una serie de números separados por comas:").split(',').map(Number);
alert(`La suma de los números positivos es: ${sumpositivo(...numeros)}`);
