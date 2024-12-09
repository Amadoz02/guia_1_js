// 30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito

const contrasena = prompt("Ingrese su contraseña:");

if (contrasena.length >= 8 && contrasena.length <= 12) {
    const mayuzc = /[A-Z]/.test(contrasena);
    const minuz = /[a-z]/.test(contrasena);
    const numeros = /[0-9]/.test(contrasena);

    if (mayuzc && minuz && numeros) {
        alert("Contraseña segura");
    } else {
        alert("Contraseña débil");
    }
} else {
    alert("Contraseña demasiado corta o demasiado larga");
}