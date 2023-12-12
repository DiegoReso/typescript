function soma1(n1:number=0,n2:number=0):number{

    return n1+n2

}

console.log(soma1(3))


function novoUser(user:string,password:string,name?:string):void{

    console.log(`User: ${user}`)
    console.log(`Password: ${password}`)
    console.log(`Name: ${name}`)

}

novoUser('br','123')