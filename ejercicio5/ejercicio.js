// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no.

    let edad = parseInt(prompt("Ingrese su edad:"));
    let Imensuales = parseFloat(prompt("Ingrese sus ingresos mensuales:"));

    if (edad >= 16 && Imensuales >= 1000) {
        console.log("Debe tributar el impuesto.");
    } else {
        console.log("No debe tributar el impuesto.");
    }
    