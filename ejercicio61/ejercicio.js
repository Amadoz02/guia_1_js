function notas() {
    let cnotas = parseInt(prompt("Ingrese la cantidad de notas"));
    let nalta = 0;
    let nbaja = 100;
    let minima = 0;
    let a = 0;
    let b = 0;s
    let c = 0;
    let d = 0;

    for (let i = 0; i < cnotas; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}`));
        if (nota > nalta) {
        nalta = nota;
        }if (nota < nbaja) {
        nbaja = nota;
        }if (nota === 100) {
        minima++;
        }else if (nota >= 90) {
        a++;
        }else if (nota >= 80) {
        b++;
        }else if (nota >= 70) {
        c++;
        }else if (nota >= 60) {
        d++;
        }
    }

    console.log(`Nota alta: ${nalta}`);
    console.log(`Nota baja: ${nbaja}`);
    console.log(`Cantidad de alumnos con nota maxima: ${minima}`);
    console.log(`Cantidad de alumnos con nota A: ${a}`);
    console.log(`Cantidad de alumnos con nota B: ${b}`);
    console.log(`Cantidad de alumnos con nota C: ${c}`);
    console.log(`Cantidad de alumnos con nota D: ${d}`);
}
  
  notas();