// 40. Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.

let nacimiento = parseInt(prompt("Ingrese el año de nacimiento del solicitante:"));
let actual = new Date().getFullYear();// trae la actual de los procesos del equipo ;)

let edad = actual - nacimiento;

alert(`La persona tiene ${edad} años.`);

