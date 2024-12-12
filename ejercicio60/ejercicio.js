// 60. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.

function cursos(cant) {
    if (cant < 6) {
      return cant * 2000000;
    } else {
      return 1200000;
    }
}
  
  let cant = parseInt(prompt("Ingrese la cantidad de cursos"));
  console.log(`Pago total: $${cursos(cant)}`);