class Pessoa {
    
    protected namee:string = "";
    public age:number = 0;

    constructor(n:string,a:number){
        this.namee = n
        this.age  = a
    }

    protected gerarMatricula(): number {
        const min = 10000;
        const max = 99999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    cumprimento():void{
        console.log(`Oi meu nome eh ${this.namee} e minha idade ${this.age}`)
    }

}

class Professor extends Pessoa{

    matricula:number = this.gerarMatricula()
    constructor(n:string,a:number){
        super(n,a)
        
    }

    cumprimentoProf():void{
        super.cumprimento()
        console.log(`Matricula do professor eh ${this.matricula}`)
    }

}


const p1 = new Pessoa("Diego",33)

p1.cumprimento()

const prof = new Professor("Taiwane",29)

prof.cumprimentoProf()
