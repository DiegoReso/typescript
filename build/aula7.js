"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias['domingo']);
console.log(dias[0]);
const d = new Date();
console.log(d.getDate());
console.log(dias[d.getDay()]);
var pedido;
(function (pedido) {
    pedido[pedido["Aguardando"] = 0] = "Aguardando";
    pedido[pedido["Preparando"] = 1] = "Preparando";
    pedido[pedido["Entrega"] = 2] = "Entrega";
})(pedido || (pedido = {}));
