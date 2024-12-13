// 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no

const esPrimo = function (numero){
    let contador = 0;
    for(let i=1; i <= numero; i++){
        console.log (i);
        if (numero % i ===0){
            contador++;
        }
    }
    if (contador === 2) return alert("el numero es primo");
    else if (contador<2 || contador>2) return alert("el numero no es primo");
    
}
let respuesta = parseInt(prompt("ingerese numero"));
let final = esPrimo(respuesta);
