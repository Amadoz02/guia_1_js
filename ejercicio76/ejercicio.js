
function maximo(...arreglo) {
    return arreglo.reduce((mayor, actual) => mayor > actual ? mayor : actual);
}

let x = prompt("ingresa una palabra");
let a = prompt("ingresa otra palabra");
let s = prompt("ingresa una palabra mas");
alert(`La palabra mayor es: ${maximo(x, a, s)}`);
