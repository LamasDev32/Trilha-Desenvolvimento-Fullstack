/* 

Requisito 2: Crie uma função que receba um array de nomes e retorne esse array ordenado
em ordem alfabética. Função: ordenarNomes
Exemplo Entrada: // ordenarNomes(['Ana', 'Elias', 'Carlos', 'Beatriz']);
Exemplo Saída: // ['Ana', 'Beatriz', 'Carlos', ‘Elias’]


*/

nomes = ['Ana', 'Elias', 'Carlos', 'Beatriz'];

function ordenarNomes(nomes) {
    return nomes.sort();
}

console.log(ordenarNomes(nomes)); // ['Ana', 'Beatriz', 'Carlos', 'Elias']