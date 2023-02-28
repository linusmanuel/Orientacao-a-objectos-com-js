import { Cliente } from './Cliente';

export class ContaCorrente {
	agencia;
	conta;

	set cliente(novoValor) {
		if (novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	}

	get cliente() {
		return this._cliente;
	}

	constructor(agencia, conta) {
		this.agencia = agencia;
		this.conta = conta;
	}

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

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}
