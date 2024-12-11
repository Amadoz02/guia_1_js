// 36. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
// bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
// de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
// cantidad de gramos de harina para hacer el bizcocho es?



let cacaoDisponible = parseFloat(prompt("Ingrese los gramos de cacao disponibles:"));
let harina = (100 * cacaoDisponible) / 10;

alert(`Se necesitan ${harina} gramos de harina para hacer la torta.`);
