const teste1=(txt:string):void=>{
    console.log(txt)
}

teste1("Testando")



const fsom2=(n1:number[]):number=>{
    let array_result=0
    
    n1.forEach((e)=>{

        array_result+=e

    })

    return array_result
}

let numer:number[]= [50,30]


console.log(fsom2(numer))