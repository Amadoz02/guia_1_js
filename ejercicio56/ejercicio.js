// 56. Un banco paga intses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

function intses(saldo) {
    let ints;
    if (saldo < 100000) {
      ints = saldo * 0.03;
    } else {
      ints = saldo * 0.04;
    }return ints;
}
  
let saldo = parseFloat(prompt("Ingrese el saldo"));
let ints = intses(saldo);
let saldoFinal = saldo + ints;

console.log(`Saldo final: $${saldoFinal.toFixed(2)}`);
console.log(`Interés pagado: $${ints.toFixed(2)}`);