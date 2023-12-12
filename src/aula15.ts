class Conta{

    protected name:string = ""
    protected saldo:number = 0
    protected saque:number = 0
    protected deposito:number = 0
    protected numeroConta:number = this.gerarNumeroConta()


    constructor(n:string,s:number){
        this.name = n
        this.saldo = s
    }

    gerarNumeroConta():number{

        return Math.floor(Math.random()*2)

    }

    saldoConta():void{
        console.log(this.saldo)
    }

    saqueConta(s:number){
        this.saldo -= s
        console.log(`Seu saldo agora eh ${this.saldo}`)
    }


}

class ContaPF extends Conta{

    cpf:number = 0


    constructor(cpf:number,n:string,s:number){
        super(n,s)
        this.cpf = cpf
    }
}

class ContaPJ extends Conta{


    cnpj:number = 0


    constructor(cnpj:number,n:string,s:number){
        super(n,s)
        this.cnpj = cnpj
    }
}

const contaGEral = new Conta("Diego",1500)
contaGEral.saldoConta()
contaGEral.saqueConta(500)