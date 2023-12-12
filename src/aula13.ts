class Computador{

    name:string = ""
    memoria:string = ""
    ghz:number = 0
    ligado:boolean = false

}

const comp1 = new Computador()

comp1.name = "Gamer"
comp1.memoria = "16GB"
comp1.ghz = 3.4
comp1.ligado = true

console.log(comp1.name)
console.log(comp1.memoria)
console.log(comp1.ghz)
console.log(comp1.ligado)