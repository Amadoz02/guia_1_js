// 42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

const precios = { libro: 10000, cuaderno: 7550, lapicero: 5550 };

let clibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
let cuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
let clapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));

let total = (clibros * precios.libro) + 
            (cuadernos * precios.cuaderno) + 
            (clapiceros * precios.lapicero);

alert(`El monto total de la venta es: $${total}`);
