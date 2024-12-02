// 2. escribir un programa que almacene la cadena de caracteres contraseña 
// de una variable, pregunte al usuario por la contraseña e imprima por pantalla 
// si la contraseña introducida por el usuario coincide con la guardada 
// en la variable sin tener en cuenta mayúsculas y minúsculas, se debe validar 
// que solo se pueda ingresar valores alfanuméricos. 

    let password = "Abc123";                
    let userPassword = prompt("Ingrese su contraseña:");

    // Validación de contraseña
    if (!/^[a-zA-Z0-9]+$/.test(userPassword)) {
        alert("Contraseña inválida. Sólo se pueden ingresar valores alfanuméricos.");
    } else {
        // Comparación de contraseñas
        if (password.toLowerCase() === userPassword.toLowerCase()) {
            alert("Contraseña correcta.");
        } else {
            alert("Contraseña incorrecta.");
        }
    }