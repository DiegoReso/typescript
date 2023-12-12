"use strict";
function testeRest(...n) {
    let s = 0;
    n.forEach((element) => {
        s += element;
    });
    return s;
}
console.log(testeRest(10, 3, 30, 100));
