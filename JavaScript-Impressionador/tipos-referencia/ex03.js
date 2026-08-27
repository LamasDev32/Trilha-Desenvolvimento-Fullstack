/* 

Exercício 3: Manipulação de Objetos - parte 1
a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
b. Acesse e imprima o nome do produto.
c. Modifique o preço do produto e imprima o objeto atualizado.

*/

let Produto = {
    nome: 'Notebook',
    preco: 2500,
    quantidade: 2
}

console.log(Produto.nome)

Produto['preco'] = 3000
console.log(Produto)