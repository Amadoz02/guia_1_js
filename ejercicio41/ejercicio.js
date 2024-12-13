// 41. Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida

let frase = prompt("Ingrese una frase que lo identifique como programador:");
function fraseInver(frase){

  let fraseInvertida = "";
  
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
  }
  
  return alert(`Frase invertida: ${fraseInvertida}`);
}

fraseInver(frase);
