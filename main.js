import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

let cliente1 = new Cliente();
cliente1.nome = 'Linus';
cliente1.cpf = '12143';

let cliente2 = new Cliente();
cliente2.nome = 'Ricardo';
cliente2.cpf = '1234';

const contaCorrenteLinus = new ContaCorrente();
contaCorrenteLinus.cliente = cliente1;
contaCorrenteLinus.depositar(500);

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.conta = cliente2;
contaCorrenteLinus.transferir(300, contaCorrenteRicardo);

console.log(contaCorrenteRicardo);
