// 68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}:`);
    for (let n = 1; n <= 10; n++) {
        console.log(`${i} x ${n} = ${i * n}`);
    }
    console.log('        ');
}
