/* 

Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio. Crie uma
função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete.


*/

let cardapio = ["Hamburguer", "Pizza", "Cachorro Quente", "Pizza", "Hamburguer", "Salada"];

function contarItensDiferentes(cardapio) {
    if (cardapio.length === 0) { // Caso base: se o cardápio estiver vazio, não há itens diferentes
        return 0;
    }

    const primeiroItem = cardapio[0]; // Pega o primeiro item do cardápio
    const restoCardapio = cardapio.slice(1); // Cria um novo array sem o primeiro item

    const itensDiferentesRestante = contarItensDiferentes(restoCardapio); // Chamada recursiva para contar os itens diferentes no restante do cardápio

    const ehNovoItem = !restoCardapio.includes(primeiroItem); // Verifica se o primeiro item não está presente no restante do cardápio

    return itensDiferentesRestante + (ehNovoItem ? 1 : 0); // Se for um novo item, adiciona 1 à contagem, caso contrário, adiciona 0

}   

console.log("Número de itens diferentes no cardápio:", contarItensDiferentes(cardapio)); // Saída: Número de itens diferentes no cardápio: 4

/* Modo moderno de realizar a mesma tarefa */

function contarItensDiferentesModerno(cardapio) {
    const itensDiferentes = new Set(cardapio);
    return itensDiferentes.size; // Retorna o tamanho do Set, que representa o número de itens diferentes
}

console.log("Número de itens diferentes no cardápio (modo moderno):", contarItensDiferentesModerno(cardapio)); // Saída: Número de itens diferentes no cardápio (modo moderno): 4