// 57. Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado.

function calif(nota) {
    if (nota >= 9.1 && nota <= 10) {
      return "Excelente";
    } else if (nota >= 8.1 && nota < 9.1) {
      return "Muy bien";
    } else if (nota >= 7.5 && nota < 8.1) {
      return "Bien";
    } else {
      return "No aprobado";
    }
}
  let nota = parseFloat(prompt("Ingrese la nota"));
  console.log(calif(nota));