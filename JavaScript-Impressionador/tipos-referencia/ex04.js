/* 

Exercício 4: Manipulação de Objetos - parte 2
a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
b. Adicione a propriedade data ao objeto.
c. Remova a propriedade produto e imprima o objeto atualizado

*/

let Venda = {
    cliente: ['Felipe', 'Astrolfo', 'Ricardo'],
    produto: ['Notebook', 'Tablet', 'Celular'],
    valor: [2500, 899.99, 1250]
}

Venda.data = '27/08/2026'

delete Venda.produto

console.log(Venda)
console.log(Venda.valor[2])