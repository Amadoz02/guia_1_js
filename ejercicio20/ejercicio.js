// 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constantes
// import oper from './ejercicio18/ejercicio.js';
let a = parseFloat(prompt("Ingrese el valor de a: "));
let b = parseFloat(prompt("Ingrese el valor de b: "));
let c = parseFloat(prompt("Ingrese el valor de c: "));

discriminante = ((a + b * c) / (b + c - a)) + a * b;

if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log(`Las raíces reales de la ecuación son x1 = ${x1} y x2 = ${x2}`);
    
} else if (discriminante === 0) {
    let x = -b / (2 * a);
    console.log(`La raíz real de la ecuación es x = ${x}`);
    
} else {
    console.log("No hay raíces reales en este caso.");
}
