/* 

Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe
umvalor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
valor total com o método calcularTotal.

*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0,
    calcularTotal: function() {
        const total = this.quantidade * this.precoUnitario * (1 - this.desconto);
        return total;
    },
    aplicarDesconto: function(percentual) {
        this.desconto = percentual;
    },
    detalharVenda: function() {
        return `Venda de ${this.quantidade} unidade(s) de ${this.produto} ao preço de R$ ${this.precoUnitario.toFixed(2)} cada, com desconto de ${this.desconto * 100}%.`;
    }
}

venda.aplicarDesconto(0.1);
console.log(venda.detalharVenda());
console.log(`Total da venda: R$ ${venda.calcularTotal().toFixed(2)}`);