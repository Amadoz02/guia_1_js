// 27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.
try {
    const regex = /^\d+(?:,\d\W+|\.\d\W+)?$/g;
    let parcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial: "));
    let parcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial: "));
    let parcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial: "));
    let examenFinal = parseFloat(prompt("Ingrese la calificación del examen final: "));
    let trabajoFinal = parseFloat(prompt("Ingrese la calificación del trabajo final: "));

    
    if (
        regex.test(parcial1) || regex.test(parcial2) || regex.test(parcial3) || regex.test(examenFinal) || regex.test(trabajoFinal) || parcial1 < 0 || parcial2 < 0 || parcial3 < 0 || 
        examenFinal < 0 || trabajoFinal < 0 ||parcial1 > 100 || parcial2 > 100 || parcial3 > 100 || examenFinal > 100 || trabajoFinal > 100) {
        throw new Error("Ingrese calificaciones válidas (números entre 0 y 100)");
    }

 
    let promParcial = (parcial1 + parcial2 + parcial3) * 0.55;
    let promexamen = examenFinal * 0.30;
    let promtrabajo = trabajoFinal * 0.15;
    let promFinal = promParcial + promexamen + promtrabajo;

    alert(`El promedio final de la materia de algoritmos es: ${promFinal}`);
} catch (e) {
    alert("Error: " + e.message);
}