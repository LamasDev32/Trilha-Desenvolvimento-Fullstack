/* 

Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que
recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
verifique o total da venda após a atualização.

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
    aplicarDesconto: function(percentual) {
        this.desconto = percentual;
    },
    detalharVenda: function() {
        return `Venda de ${this.quantidade} unidade(s) de ${this.produto} ao preço de R$ ${this.precoUnitario.toFixed(2)} cada, com desconto de ${this.desconto * 100}%.`;
    },
    atualizarQuantidade: function(novaQuantidade) {
        this.quantidade = novaQuantidade;
    }
}

venda.atualizarQuantidade(3);
console.log(venda.detalharVenda());
console.log(`Total da venda: R$ ${venda.calcularTotal().toFixed(2)}`);