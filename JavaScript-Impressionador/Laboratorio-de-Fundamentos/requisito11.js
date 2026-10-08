/* 

Requisito 11: Crie uma função que receba um número inteiro e retorne um booleano
indicando se o número é primo.
Função: ehPrimo
// 5
Exemplo Entrada: // ehPrimo(7);
// ehPrimo(4);
Exemplo Saída: // true
// false

*/

function ehPrimo(numero) {
    if(numero <= 1) { // Números menores ou iguais a 1 não são primos
        return false;
    }
    for(let i = 2; i <= Math.sqrt(numero); i++) { // Verifica se o número é divisível por algum número entre 2 e a raiz quadrada do número
        if(numero % i === 0) { // Se for divisível, não é primo
            return false;
        }
    }
    return true; // Se não for divisível por nenhum número, é primo
}

console.log(ehPrimo(19)); // true
console.log(ehPrimo(4)); // false