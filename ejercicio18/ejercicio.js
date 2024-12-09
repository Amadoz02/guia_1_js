// 18. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b 
function oper(a, b, c){
    try {
    let resultado = ((a + 7 * c) / (b + 2 - a)) + 2 * b;
    alert(resultado);
    
    } catch (e) {
        console.error("Error: ", e.message);
    }

}
let a = parseFloat(prompt("Ingrese el valor de a: "));
let b = parseFloat(prompt("Ingrese el valor de b: "));
let c = parseFloat(prompt("Ingrese el valor de c: "));

export default oper;