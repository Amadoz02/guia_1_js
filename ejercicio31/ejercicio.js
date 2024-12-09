// 31. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la
// solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2).

function calculateDistance(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
}

let x1 = parseFloat(prompt("ingrese x1: "));
let y1 = parseFloat(prompt("ingrese x2: "));
let x2 = parseFloat(prompt("ingrese y1: "));
let y2 = parseFloat(prompt("ingrese y2: "));

alert(`La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${calculateDistance(x1, y1, x2, y2)}`);
