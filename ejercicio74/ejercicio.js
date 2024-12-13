// 74. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará.

let entrada = prompt("Escribe el eco, o salir para terminar): ");
do {
    if (entrada.toLowerCase() !== "salir") {
        console.log(entrada);
    }
} while (entrada.toLowerCase() !== "salir");
alert("Programa terminado.");
