function f_teste<T>(v:T):T{
    
    return v

}

console.log(f_teste<number>(10))
console.log(f_teste<string>("10"))
console.log(f_teste<boolean>(true))
