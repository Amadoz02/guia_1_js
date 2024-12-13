function validarPin(pin) {
    return /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
}
let pin= parseInt(prompt("ingrese un pin (solo numeros) {maximo 6}"));
alert(validarPin(pin) ? "pin valido" : "pin no valido");