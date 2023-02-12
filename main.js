class Cliente {
	nome;
	cpf;
}

class ContaCorrente {
	agencia;
	saldo;

	sacar(valor) {
		if (this.saldo >= valor) this.saldo -= valor;
	}
}

const cliente1 = new Cliente();
cliente1.nome = 'Linus';
cliente1.cpf = 1234;
console.log(cliente1);

const cliente2 = new Cliente();
cliente2.nome = 'Molina';
cliente2.cpf = 1999;
console.log(cliente2);

const contaCorrenteLinus = new ContaCorrente();
contaCorrenteLinus.agencia = 1001;
contaCorrenteLinus.saldo = 100;

console.log(`Saldo: ${contaCorrenteLinus.saldo}`);
contaCorrenteLinus.sacar(50);
console.log(`Novo Saldo: ${contaCorrenteLinus.saldo}`);
