// 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo

let velocidadKilometrosPorHora = prompt('Velocidad en kilómetros por hora');
let velocidadMetrosPorSegundo = velocidadKilometrosPorHora * 1000 / 3600;

console.log(`La velocidad es ${velocidadMetrosPorSegundo} metros por segundo.`);


