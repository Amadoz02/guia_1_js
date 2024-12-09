// 17. Escribir un programa que calcule el volumen de una esfera.

function calcularVolumenEsfera(radio) {
    const pi = Math.PI;
    return (4 / 3) * pi * Math.pow(radio, 3);
}

const radio = parseFloat(prompt('Ingrese el radio de la esfera: '));

if (isNaN(radio) || radio <= 0) {
    console.log('Error: El radio debe ser un número positivo.');
} else {
    const volumen = calcularVolumenEsfera(radio);
    alert(`El volumen de la esfera es: ${volumen.toFixed(2)} cm3`);
}
