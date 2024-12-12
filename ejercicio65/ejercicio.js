

function cuentaAtrás(num) {
    let cuenta = [];
    for (let i = num; i >= 0; i--) {
      cuenta.push(i);
    }
    console.log(cuenta.join(", "));
  }
  
  let num = parseInt(prompt("Ingrese un num"));
  cuentaAtrás(num);