import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('João Lino', 100550040001);
const cliente2 = new Cliente('Hendrick', 100550040003);

const contaCorrenteLinus = new ContaCorrente('Sequele', cliente1);
const contaCorrenteHendrick = new ContaCorrente('Cacuaco', cliente2);

contaCorrenteLinus.depositar(500);
contaCorrenteLinus.levantar(50);
contaCorrenteLinus.transferir(450, contaCorrenteHendrick);

console.log(contaCorrenteLinus);
console.log(contaCorrenteHendrick);
console.log(ContaCorrente);
