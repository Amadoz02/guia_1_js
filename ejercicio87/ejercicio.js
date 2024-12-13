function numrandom() {
    const numero = Math.floor(Math.random() * 10) + 1;
    const par = numero % 2 === 0 ? "par" : "impar";
    return { numero, par };
}

// Generar y mostrar
const resultado = numrandom();
alert(`El número generado es: ${resultado.numero} y es ${resultado.par}.`);
