import { Cliente } from './Cliente.js';
// import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('João Lino', 923456);
console.log(cliente1.nome);

const contaCorrenteLinus = new ContaCorrente(
	'Atlantico Sequele',
	1234,
	cliente1
);

console.log(contaCorrenteLinus.agencia);
