/* 

Você é o gerente de uma lanchonete e deseja listar os itens do cardápio para exibição. Os itens do cardápio
são armazenados em um objeto onde as chaves são os nomes dos itens e os valores são os preços. Crie um
programa que use um loop for...in para listar todos os itens do cardápio juntamente com seus preços.

*/


const cardapio = {
    "Hambúrguer": 10,
    "Batata Frita": 8,
    "Refrigerante": 5,
    "Suco Natural": 7
};

for (let item in cardapio) {
    console.log(`Produto: ${item}, Preço: R$${cardapio[item].toLocaleString('pt-BR', { minimumFractionDigits: 2})}`);
}

