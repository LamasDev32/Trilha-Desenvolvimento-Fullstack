/* 

Você deseja criar um cardápio digital para sua lanchonete. Crie um programa que liste os itens do cardápio
juntamente com seus preços. Utilize um loop for para percorrer o cardápio e exibi-lo.

*/

let cardapio = {
    items: [
        {nome: "Hamburguer", preco: 10},
        {nome: "batata frita", preco: 5},
        {nome: "Refrigerante", preco: 3},
        {nome: "Milkshake", preco: 7},
        {nome: "Salada", preco: 8}
    ]
}

function exibirCardapio(){
    console.log("Cardapio Digital:");
    for(let i = 0; i < cardapio.items.length; i++) {
        console.log(`${cardapio.items[i].nome} - R$${cardapio.items[i].preco.toFixed(2)}`);
    }
}

exibirCardapio();