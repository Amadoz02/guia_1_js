// 70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

//mismo ejercicio q el dos
let password = "Abc123";                
let userPassword = prompt("Ingrese su contraseña:");

// Validación de contraseña
if (!/^[a-zA-Z0-9]+$/.test(userPassword)) {
    alert("Contraseña invalida. Solo se pueden ingresar valores alfanumericos.");
} else {
    // Comparación de contraseñas
    if (password.toLowerCase() === userPassword.toLowerCase()) {
        alert("Contraseña correcta.");
    } else {
        alert("Contraseña incorrecta.");
    }
}