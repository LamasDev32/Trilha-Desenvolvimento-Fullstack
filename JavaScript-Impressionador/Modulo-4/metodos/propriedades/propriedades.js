/* 

O que são propriedades?
Propriedades são valores associados a um objeto. Elas podem ser de qualquer tipo, como números, strings, arrays, funções, etc. As propriedades podem ser acessadas e modificadas usando a notação de ponto ou colchetes.

A diferença entre propriedades e métodos é que métodos são funções associadas a um objeto, enquanto propriedades são valores associados a um objeto.

*/

const objeto = { 
    propriedade: 10, // Propriedade do tipo número 
    saudacao: function () { // Propriedade do tipo função 
        console.log("Olá eu sou um método");
    },
};

console.log(objeto.propriedade);
objeto.saudacao();

const string = "Eu sou louco por Javascript!!!";
console.log(string.length);

const array = [1, 30, 56, 4];
console.log(array.length);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}