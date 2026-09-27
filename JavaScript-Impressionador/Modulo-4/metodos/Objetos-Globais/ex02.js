/* 
Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o
valor mínimo dessa lista.
Exemplo Entrada: // 10, 5, 20, 40, 1, 7
Exemplo Saída: // Valor mínimo: 1
Valor máximo: 40
*/

function encontrarMinMax(lista) {
    const valorMinimo = Math.min(...lista);
    const valorMaximo = Math.max(...lista);
    console.log(`Valor mínimo: ${valorMinimo}`);
    console.log(`Valor máximo: ${valorMaximo}`);
}

// Exemplo de uso da função
const listaDeNumeros = [10, 5, 20, 40, 1, 7];
encontrarMinMax(listaDeNumeros);