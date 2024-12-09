// 24. Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
//     2.3e-1, -3e2, 23, 3.2). pide los numeros, usa try cach, evalua que no haya letras

let numero = prompt("Ingrese un número con punto flotante: ");

let regex = /^[-+]?[0-9]+\.[0-9]+([eE][-+]?[0-9]+)?$/;

try {
    if (regex.test(numero.toString())) {
        console.log("El número es flotante.");
    } else {
        console.log("El número ingresado no es válido. Debe contener al menos un dígito antes y después del punto decimal.");
    }
} catch (error) {
    console.error("Error al procesar el número:", error);
}