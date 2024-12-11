// 43. Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

let regex = /"(?:\\.|[^"\\])*"/g;

let texto = prompt("Ingrese un texto para identificar cadenas entre comillas dobles:");
let cadenas = texto.match(regex);

alert(`Cadenas encontradas: ${cadenas ? cadenas.join(", ") : "Ninguna"}`);
