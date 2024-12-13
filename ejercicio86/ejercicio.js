function borravocales(cadena) {
    return cadena.replace(/[aeiou]/gi, '');
}


const texto = prompt("Ingresa una palabra o frase:");
alert(`frase o palabra sin vacales ${borravocales(texto)}`);
