/* 

Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade,
precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
valor total da venda, considerando o desconto. Adicione também um método chamado
detalharVenda que retorne uma string detalhando a venda.

*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0.1,
    calcularTotal: function() {
        const total = this.quantidade * this.precoUnitario * (1 - this.desconto);
        return total;
    },
    detalharVenda: function() {
        return `Venda de ${this.quantidade} unidade(s) de ${this.produto} ao preço de R$ ${this.precoUnitario.toFixed(2)} cada, com desconto de ${this.desconto * 100}%.`;
    }
}

console.log(venda.detalharVenda());
console.log(`Total da venda: R$ ${venda.calcularTotal().toFixed(2)}`);