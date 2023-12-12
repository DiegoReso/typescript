"use strict";
const teste1 = (txt) => {
    console.log(txt);
};
teste1("Testando");
const fsom2 = (n1) => {
    let array_result = 0;
    n1.forEach((e) => {
        array_result += e;
    });
    return array_result;
};
let numer = [50, 30];
console.log(fsom2(numer));
