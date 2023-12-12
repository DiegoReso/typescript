"use strict";
class Conta {
    name = "";
    saldo = 0;
    saque = 0;
    deposito = 0;
    numeroConta = this.gerarNumeroConta();
    constructor(n, s) {
        this.name = n;
        this.saldo = s;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 2);
    }
    saldoConta() {
        console.log(this.saldo);
    }
    saqueConta(s) {
        this.saldo -= s;
        console.log(`Seu saldo agora eh ${this.saldo}`);
    }
}
class ContaPF extends Conta {
    cpf = 0;
    constructor(cpf, n, s) {
        super(n, s);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj = 0;
    constructor(cnpj, n, s) {
        super(n, s);
        this.cnpj = cnpj;
    }
}
const contaGEral = new Conta("Diego", 1500);
contaGEral.saldoConta();
contaGEral.saqueConta(500);
