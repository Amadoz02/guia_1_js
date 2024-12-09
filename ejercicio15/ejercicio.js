// 15. Escribir un programa que calcule la longitud y el área de una circunferencia.
let radio = parseFloat(prompt("Ingrese el radio de la circunferencia: "));
function circunferencia(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    let longitud = 2 * Math.PI * radio;
    return (`el area es == ${area}  \n la longitud es ==${longitud}`);
}
console.log(circunferencia(radio));