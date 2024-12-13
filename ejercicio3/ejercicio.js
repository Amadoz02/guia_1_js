// 3. Escribir un programa que pida al usuario dos números y 
// muestre por pantalla su división, si el divisor es cero el programa debe mostrar
//  un error, se debe manejar mediante excepciones y el mensaje debe ser personalizado. 

    try {
        let num1 = parseInt(prompt("Ingrese el primer numero:"));
        let num2 = parseInt(prompt("Ingrese el segundo numero:"));

        if (num2 === 0) {
            throw new Error("El divisor no puede ser cero.");
        }

        let result = num1 / num2;
        alert(`La division de ${num1} entre ${num2} es ${result}`);
    } catch (error) {
        alert(error.message);
    }