export class Cliente {
	nome;
	_bi;

	get cpf() {
		return this._cpf;
	}
	constructor(nome, bi) {
		this.nome = nome;
		this._bi = bi;
	}
}
