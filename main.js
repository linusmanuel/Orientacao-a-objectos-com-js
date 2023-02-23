const contaCorrenteLinus = new ContaCorrente();
contaCorrenteLinus._agencia = 1001;
contaCorrenteLinus.depositar(150);

let valorSacado = contaCorrenteLinus.sacar(60);
console.log(contaCorrenteLinus);
console.log(`Sacado: ${valorSacado}`);
