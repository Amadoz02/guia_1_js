// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos

let nacmadre = parseInt(prompt("Ingrese el año de nacimiento de la madre:"));
let nachijo = parseInt(prompt("Ingrese el año de nacimiento del hijo:"));

let edadMadre = nachijo - nacmadre;

alert(`La madre tenía ${edadMadre} años cuando dio a luz.`);
