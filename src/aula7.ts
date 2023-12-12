enum dias{
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

console.log(dias.domingo)
console.log(dias['domingo'])
console.log(dias[0])

const d = new Date()
console.log(d.getDate())
console.log(dias[d.getDay()])

enum pedido{
    Aguardando,
    Preparando,
    Entrega
}