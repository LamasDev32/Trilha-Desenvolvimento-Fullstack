/* 

Requisito 3: Crie uma função que receba dois valores e retorne verdadeiro se ambos forem
considerados "truthy".
Função: compararValores
Exemplo Entrada: // compararValores(5, "texto");
// compararValores(0, "texto");
Exemplo Saída: // true
// false

*/

function compararValores(valor1, valor2) {
    return Boolean(valor1) && Boolean(valor2);
}

console.log(compararValores(5, "texto")); // true - truthy
console.log(compararValores(0, "texto")); // false - falsy