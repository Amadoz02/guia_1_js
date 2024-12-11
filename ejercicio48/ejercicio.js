// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let figura = prompt("¿Qué figura desea calcular? (T Triángulo,\n C  Círculo):").toUpperCase();

if (figura === "T") {
  let base = parseFloat(prompt("Ingrese la base del triangulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del triangulo:"));
  let area = (base * altura) / 2;
  alert(`El area del triangulo es: ${area}`);
} else if (figura === "C") {
  let radio = parseFloat(prompt("Ingrese el radio del circulo:"));
  let area = Math.PI * Math.pow(radio, 2);
  alert(`El area del circulo es: ${area}`);
} else {
  alert("Figura no valida.");
}
