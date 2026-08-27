let listaA = [1, 2, 3];

let listaB = listaA;
listaB[0] = 99;

console.log(listaA);
console.log(listaB);

// let string = "Olá";
// let mensagem = string;
// mensagem = "Olá Bem vindo";

// console.log(mensagem);
// console.log(string);

let objA = { nome: "Millene" };
let objB = objA;
objB.idade = 34;

console.log(objA);
console.log(objB);

let listaC = [...listaA];
console.log(listaC);
listaC[3] = 100;

console.log(listaC);
console.log(listaA);

let objC = { ...objA };
objC.corDeCabelo = "Castanho";
console.log(objC);
console.log(objA);
