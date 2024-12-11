// 50. Considere dos variables llamadas temp y presión. Escriba una sentencia if-else que
// muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable
// temp es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra
// Normal.

let temp = parseFloat(prompt("Ingrese la temp:"));
let presion = parseFloat(prompt("Ingrese la presion:"));

if (presion > 200 || temp > 100) {
  alert("Alarma");
} else {
  alert("Normal");
}
