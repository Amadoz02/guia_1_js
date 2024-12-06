// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.

let alumnos = [
    { nombre: "Ana", sexo: "F", grupo: "A" },
    { nombre: "Juan", sexo: "M", grupo: "B" },
    { nombre: "Maria", sexo: "F", grupo: "A" },
    { nombre: "Pedro", sexo: "M", grupo: "B" },
    { nombre: "Isabella", sexo: "F", grupo: "A" },
    { nombre: "Andrés", sexo: "M", grupo: "B" },
    { nombre: "Carlos", sexo: "M", grupo: "B" }]
    
let nombre = prompt("Ingrese su nombre:");

if (!nombre) {
    alert("Debe ingresar un nombre");
}
.0

if (sexo!== "M" && sexo!== "F") {
    alert("Debe ingresar un sexo válido (M/F)");
} else {
    let grupo = alumnos.find(alumno => alumno.nombre === nombre && alumno.sexo === sexo);
    
    if (!grupo) {
        alert("El alumno no se encuentra en ningún grupo");
    } else {
        alert(`El alumno ${nombre} se encuentra en el grupo ${grupo.grupo}`);
    }
}
let sexo = prompt("Ingrese su sexo (M/F):").toUpperCase();


