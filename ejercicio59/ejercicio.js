// 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.
function basquet(edad, estatura, peso) {
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
      return "Seleccionado";
    } else {
      return "No seleccionado";
    }
  }
  
  let edad = parseInt(prompt("Ingrese la edad"));
  let estatura = parseFloat(prompt("Ingrese la estatura"));
  let peso = parseFloat(prompt("Ingrese el peso"));
  alert(basquet(edad, estatura, peso));