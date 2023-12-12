interface curso{
    titulo:string
    des:string
    aulas:number
    maxAlunos?:number

    iniciarCurso?(teste:string):void
}


let curso1:curso

curso1 = {titulo:"Javascript",des:"curso de javascript",aulas:80,maxAlunos:20,iniciarCurso(t:string){console.log("teste")}}

    
console.log(curso1)
