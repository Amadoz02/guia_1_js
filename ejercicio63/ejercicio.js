// 63. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
// años que ha cumplido (desde 1 hasta su edad).

function anios(edad) {
    for (let i = 1; i <= edad; i++) {
      console.log(`Ha cumplido ${i} años`);
    }
  }
  
  let edad = parseInt(prompt("Ingrese su edad"));
  anios(edad);