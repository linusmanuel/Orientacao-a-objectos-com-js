class Cliente {
	nome;
	cpf;
}

class ContaCorrente {
	agencia;
	saldo;
}

const cliente1 = new Cliente();
cliente1.nome = 'Linus';
cliente1.cpf = 1234;
console.log(cliente1);

const cliente2 = new Cliente();
cliente2.nome = 'Molina';
cliente2.cpf = 1999;

const contaCorrenteLinus = new ContaCorrente();
contaCorrenteLinus.agencia = 1001;
contaCorrenteLinus.saldo = 0;
console.log(contaCorrenteLinus.saldo);
contaCorrenteLinus.saldo += 100;
console.log(contaCorrenteLinus.saldo);
let saque = 100;

if (contaCorrenteLinus.saldo >= saque) {
	contaCorrenteLinus.saldo -= saque;
}

console.log(contaCorrenteLinus.saldo);
