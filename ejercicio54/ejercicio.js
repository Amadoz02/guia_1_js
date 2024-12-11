// 54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//     segundo, en caso contrario indicar con un mensaje que la operación no es posible
//     realizarla.
    
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
  let resultado = num1 - num2;
  alert(`La resta es: ${resultado}`);
} else {
  alert("La operación no es posible.");
}
