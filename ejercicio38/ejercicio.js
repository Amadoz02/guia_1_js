// 38. Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena?

let tapas = parseInt(prompt("Ingrese el total de tapas reunidas:"));

let martin = (2 / 3) * tapas;
let jairo = (1 / 4) * tapas;
let lorena = tapas - (martin + jairo);

alert(`Reparto de tapas:
- Martín: ${martin.toFixed(2)}
- Jairo: ${jairo.toFixed(2)}
- Lorena: ${lorena.toFixed(2)}`);
