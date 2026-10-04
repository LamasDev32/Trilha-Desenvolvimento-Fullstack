/* 

Você é o gerente de uma lanchonete e está verificando o estoque de itens em falta. 
Crie um programa que permita que você insira os itens que estão em falta e os adicione ao estoque até que você decida encerrar o processo.

*/

const estoqueLanchonete = {
    "sanduiche": 10,
    "hamburguer": 5,
    "batata frita": 20,
    "refrigerante": 15
}

function atualizarEstoque(estoque, itemFalta, quantidadeAdicionar)  {
    if(estoque.hasOwnProperty(itemFalta)) {
        estoque[itemFalta] += quantidadeAdicionar;
        console.log(`O item "${itemFalta}" foi atualizado. Nova quantidade: ${estoque[itemFalta]}`);
    } else {
        console.log(`O item "${itemFalta}" não existe no estoque.`);
    }
}

console.log("Bem-vindo ao sistema de atualização de estoque da lanchonete!");
console.log("Itens disponíveis no estoque:");

let continuarAdicionando = true;
let itemNaoEncontrado = false;

do {
    const itemEmFalta = "hamburguer";
    const quantidadeAdicionar = 5;

    if (!itemNaoEncontrado) {
        console.log("item não encontrado no estoque. Por favor, insira um item válido.");
        itemNaoEncontrado = true;
    } else if (estoqueLanchonete[itemEmFalta] + quantidadeAdicionar > 50) {
        continuarAdicionando = false;
        console.log(`Limite de estoque (${itemEmFalta}: ${estoqueLanchonete[itemEmFalta]}) atingido. Não é possível adicionar mais itens.`);
    } else {
        atualizarEstoque(estoqueLanchonete, itemEmFalta, quantidadeAdicionar);
    }   
} while (continuarAdicionando);

console.log("Processo de atualização de estoque encerrado.");
console.log("Estoque final da lanchonete:", estoqueLanchonete);

