// 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

function inversion(cantidad, interes, anios){
    let capital = 0;
    for (let i=1; i>=anios; i++){
        capital += cantidad +(cantidad*(interes/100));
        console.log(`capital del año ${i} = $${capital}`);
    }
    return alert(`el total de capital que recibiras es: ${capital}`)
}

let cant= prompt("Cantidad de dinero a invertir");
let ints= prompt("Interes anual");
let time= prompt("Años de tu inversion");
 inversion(cant,ints,time);