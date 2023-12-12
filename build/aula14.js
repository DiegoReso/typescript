"use strict";
class Pessoa {
    namee = "";
    age = 0;
    constructor(n, a) {
        this.namee = n;
        this.age = a;
    }
    gerarMatricula() {
        const min = 10000;
        const max = 99999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    cumprimento() {
        console.log(`Oi meu nome eh ${this.namee} e minha idade ${this.age}`);
    }
}
class Professor extends Pessoa {
    matricula = this.gerarMatricula();
    constructor(n, a) {
        super(n, a);
    }
    cumprimentoProf() {
        super.cumprimento();
        console.log(`Matricula do professor eh ${this.matricula}`);
    }
}
const p1 = new Pessoa("Diego", 33);
p1.cumprimento();
const prof = new Professor("Taiwane", 29);
prof.cumprimentoProf();
