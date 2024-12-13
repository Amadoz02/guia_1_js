function silabas(palabra) {
    let silabas = palabra.match(/[aeiouáéíóúü]+/gi);
    return silabas ? silabas.length : 0;
}//como cadasilaba debe tener al menos una vocal
//contamos las bocales y de esta manera tenemos sus silabas
let pal = prompt("ingrese palabra");
alert(silabas(pal));