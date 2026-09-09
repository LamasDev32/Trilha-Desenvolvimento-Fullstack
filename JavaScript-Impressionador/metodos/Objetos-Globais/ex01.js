/* 
Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
resultado de cada arredondamento no console.
Exemplo Entrada: // 7.89
Exemplo Saída: // Arredondado para baixo: 7
Arredondado para cima: 8
Arredondado para o valor mais próximo: 8 
*/

function arredondarNumero(numero) {
    const arredondadoParaBaixo = Math.floor(numero);
    const arredondadoParaCima = Math.ceil(numero);
    const arredondadoParaMaisProximo = Math.round(numero);
    console.log(`Arredondado para baixo: ${arredondadoParaBaixo}`);
    console.log(`Arredondado para cima: ${arredondadoParaCima}`);
    console.log(`Arredondado para o valor mais próximo: ${arredondadoParaMaisProximo}`);
}

// Exemplo de uso da função
const numeroDecimal = 7.89;
arredondarNumero(numeroDecimal);