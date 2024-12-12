
function inpares(num) {
    let impares = [];
    for (let i = 1; i <= num; i++) {
      if (i % 2 !== 0) {
        impares.push(i);
      }
    }
    console.log(impares.join(", "));
  }
  
  let num = parseInt(prompt("Ingrese un num"));
  inpares(num);