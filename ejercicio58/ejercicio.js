// 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_emes === lse anidados.

function zodiaco(mes) {
    if (mes === "enero")return "Capricornio";
    else if (mes === "febrero")return "Acuario";
    else if (mes === "marzo")return "Piscis";
    else if (mes === "abril")return "Aries";
    else if (mes === "mayo")return "Tauro";
    else if (mes === "junio")return "Géminis";
    else if (mes === "julio")return "Cáncer";
    else if (mes === "agosto")return "Leo";
    else if (mes === "septiembre")return "Virgo";
    else if (mes === "octubre")return "Libra";
    else if (mes === "noviembre")return "Escorpio";
    else if (mes === "diciembre")return "Sagitario";
    else return "ingrese mes valido";
}
  
  let mes = prompt("Ingrese el mes");
  alert(zodiaco(mes));