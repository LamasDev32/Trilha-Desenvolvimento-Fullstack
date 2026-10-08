/* 

Requisito 8: Crie uma função que receba um array de gastos e retorne a quantidade de vezes
que o maior gasto aparece nesse array.
Função: maiorGasto
Exemplo Entrada: // maiorGasto([10, 5, 20, 15]);
Exemplo Saída: // 20

*/

function maiorGasto(gastos) {
    let maior = Math.max(...gastos); // Encontra o maior gasto no array
    let contador = 0;
    for (let i = 0; i < gastos.length; i++) {
        if (gastos[i] === maior) { // Verifica se o gasto atual é igual ao maior gasto
            contador++; // Incrementa o contador se for igual
        }
    }
    return contador; // Retorna a quantidade de vezes que o maior gasto aparece no array
}

console.log(maiorGasto([10, 15, 20, 20, 15])); // 2