class ContaCorrente {
	_agencia;
	_saldo = 0;

	sacar(valor) {
		if (this._saldo >= valor) {
			this._saldo -= valor;
			return valor;
		}
	}

	depositar(valor) {
		if (valor < 0) return;
		this._saldo += valor;
	}
}

const contaCorrenteLinus = new ContaCorrente();
contaCorrenteLinus._agencia = 1001;
contaCorrenteLinus.depositar(150);

let valorSacado = contaCorrenteLinus.sacar(60);
console.log(contaCorrenteLinus);
console.log(`Sacado: ${valorSacado}`);
