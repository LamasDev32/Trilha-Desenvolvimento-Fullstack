/* 

Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
cliente. Os itens do pedido estão armazenados em um array de objetos, onde cada objeto tem o nome do
item e a quantidade. Crie um programa que use um loop for...of para percorrer o pedido do cliente e calcule o
valor total da conta.

*/

let cardapio = [ // Array com os itens do cardápio e seus preços
    { nome: "X-burguer", preco: 10.00 },
    { nome: "Duplo Cheddar", preco: 15.00 },
    { nome: "Pizza Calabresa", preco: 20.00 },
    { nome: "Pizza Frango c/ Catupiry", preco: 22.00 },
    { nome: "Cachorro Quente", preco: 8.00 },
    { nome: "Salada", preco: 12.00 }
];

let pedido = [ // Array com os itens pedidos pelo cliente e suas quantidades
    { nome: "X-burguer", quantidade: 2 },
    { nome: "Pizza Calabresa", quantidade: 1 },
    { nome: "Salada", quantidade: 3 }
];

let total = 0; // Variável para armazenar o total da conta

for (let item of pedido) { // Loop for...of para percorrer o pedido do cliente
    let produto = cardapio.find(produto => produto.nome === item.nome); // Procura o item no cardápio com base no nome do item do pedido
    if (produto) { // Se o item for encontrado no cardápio, calcula o total da conta
        total += produto.preco * item.quantidade; // Adiciona o valor do item ao total da conta
    }
}

console.log(`Total da conta: R$${total.toFixed(2)}`); // Exibe o total da conta formatado com duas casas decimais