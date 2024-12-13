// 67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido.

function triangulo(num) {
    num = parseInt(num);
    for (let i = 1; i <= num; i++) {
        let linea = ""; 
        for (let b = 1; b <= i; b++) { 
            linea += "X";
        }
        console.log(linea);
    }
}

let num = prompt("Ingrese la altura del triángulo: ");
triangulo(num);
