// 26. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

function cent_a_farent(gradosCentigrados) {
    return (gradosCentigrados * 9/5) + 32;
}


let centigrados = parseInt(prompt("ingresa los grados centigrados"));

alert(cent_a_farent(centigrados) + " grados Fahrenheit"); 


