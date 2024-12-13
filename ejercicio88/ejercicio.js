function num_text(num) {
    let texto = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    return texto[num] || "numero o caracter invalido";
}

let num = parseInt(prompt("Ingresa un número entre 0 y 5:"), 10);
alert(`El número ${num} en texto es: ${num_text(num)}`);
