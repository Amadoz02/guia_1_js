function fraseInver(frase){

    let fraseInvertida = "";
    
    for (let i = frase.length - 1; i >= 0; i--) {
      fraseInvertida += frase[i];
    }
    
    return alert(`Frase invertida: ${fraseInvertida}`);
}
  
let frase = prompt("Ingrese una frase o palabra");
fraseInver(frase);