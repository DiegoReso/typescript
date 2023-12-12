"use strict";
function soma1(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma1(3));
function novoUser(user, password, name) {
    console.log(`User: ${user}`);
    console.log(`Password: ${password}`);
    console.log(`Name: ${name}`);
}
novoUser('br', '123');
