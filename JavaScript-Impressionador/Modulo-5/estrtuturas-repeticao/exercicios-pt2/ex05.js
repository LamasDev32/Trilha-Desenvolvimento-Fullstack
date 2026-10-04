/* 

Reutilizando o cardápio da lanchonete armazenado em um array do exercício 1, crie um programa que use
um loop for...of para listar todos os itens do cardápio.

*/


let cardapio = ["X-burguer", "Duplo Cheddar", "Pizza Calabresa", "Pizza Frango c/ Catupiry", "Cachorro Quente", "Salada"]; // Array com os itens do cardápio diferente do exercício 1 por questão de toc!

function listarCardapio() { // Função para listar os itens do cardápio
    for (let item of cardapio) { // Loop for...of para percorrer o array do cardápio
        console.log(`Produto: ${item}`); // Exibe o nome do item do cardápio
    }
}
listarCardapio(); // Chama a função para listar o cardápio