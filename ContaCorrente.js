import { Cliente } from './Cliente.js';

export class ContaCorrente {
	static numeroDeContas = 0;
	agencia;
	_cliente;
	_saldo = 0;

	set cliente(novoValor) {
		if (novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	}

	get saldo() {
		return this._saldo;
	}

	get cliente() {
		return this._cliente;
	}

	constructor(agencia, cliente) {
		this.agencia = agencia;
		this._cliente = cliente;
		ContaCorrente.numeroDeContas += 1;
	}

	levantar(valor) {
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
		const valorSacado = this.levantar(valor);
		conta.depositar(valorSacado);
	}
}
