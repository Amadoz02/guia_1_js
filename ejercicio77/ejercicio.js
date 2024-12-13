function palabralong(palabra) {
    let silabas = palabra.length;
    return palabra.length < 5 ? `la palabra es corta, tiene ${silabas} silabas` : `la palabra es larga, tiene ${silabas} silabas`;
}
let pal = prompt("ingrese palabra");
alert(palabralong(pal));

//la funcion cumple con 2 ejercicios, cuenta las silabas 
// y retorna si es corta o larga y la cantidadde silabas