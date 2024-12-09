// 7. los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.

let rentaAnual = parseInt(prompt("Ingrese su renta anual:"));

if (rentaAnual >= 10000 && rentaAnual <= 20000) {
    console.log("Tipo de impositivo: 5%");
} else if (rentaAnual >= 20000 && rentaAnual <= 35000) {
    console.log("Tipo de impositivo: 10%");
} else if (rentaAnual >= 35000 && rentaAnual <= 60000) {
    console.log("Tipo de impositivo: 20%");
} else {
    console.log("Tipo de impositivo: 45%");
}   
