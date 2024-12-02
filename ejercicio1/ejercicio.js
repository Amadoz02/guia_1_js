// 1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o menor 
// de edad, el programa debe validar que solo se puedan ingresar números positivos.  
let edad = parseInt(prompt("ingresa tu edad"));

if (edad < 0) {
    alert("Debes ingresar un número positivo");
} else {
    if (edad >= 18) {
        console.log("eres mayor de edad");
    } else {
        console.log("eres menor de edad");
    }
}