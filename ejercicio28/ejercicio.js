// 28. Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

let nombre = prompt("Ingrese su nombre:");
let horas = parseInt(prompt("Ingrese las horas trabajadas:"));
let pagoPorHora = parseFloat(prompt("Ingrese el pago por hora:"));

function Empleado(nombre, horas, pagoPorHora) {
  this.nombre = nombre;
  this.horas = horas;
  this.pagoPorHora = pagoPorHora;

  this.sueldo = function() {
    return this.nombre + " tu pago será de: " + (this.horas * this.pagoPorHora);
  };
}


let empleado = new Empleado(nombre, horas, pagoPorHora);
alert(empleado.sueldo());