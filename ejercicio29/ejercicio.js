// 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos, las calificaciones se piden y se guardan en un array.

function notas(n1, n2, n3, n4) {
let notas= [];
if (typeof(n1)=='number' && typeof(n2)=='number' && typeof(n3)==='number'
    && typeof(n4)==='number' && n1>=1 && n1<=5 && n2>=1 && n2<=5 && n3>=1 && n3<=5 && n4>=1 && n4<=5) {
    notas.push(n1);
    notas.push(n2);
    notas.push(n3);
    prom=(n1+n2+n3+n4)/4;
    return "tus notas dieron un promedio de: " + prom;
} else {
    console.log("Los valores ingresados no son números");
    return;
}
}
nota1= parseFloat(prompt("ingrese nota 1: "));
nota2= parseFloat(prompt("ingrese nota 2: "));
nota3= parseFloat(prompt("ingrese nota 3: "));
nota4= parseFloat(prompt("ingrese nota 4: "));
console.log(notas(nota1, nota2, nota3, nota4));