/* 

Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade
disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada
ou se é necessário ajustar a quantidade.

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
    aplicarDesconto: function(percentual) { // Adiciona um método para aplicar desconto na venda
        this.desconto = percentual;
    },
    detalharVenda: function() {
        return `Venda de ${this.quantidade} unidade(s) de ${this.produto} ao preço de R$ ${this.precoUnitario.toFixed(2)} cada, com desconto de ${this.desconto * 100}%.`; // Retorna uma string detalhando a venda
    },
    atualizarQuantidade: function(novaQuantidade) { // Adiciona um método para atualizar a quantidade do produto na venda
        this.quantidade = novaQuantidade;
    },
    verificarEstoque: function(estoqueDisponivel) { // Adiciona um método para verificar se a venda pode ser realizada com base na quantidade disponível em estoque
        if (this.quantidade <= estoqueDisponivel) {
            return "Venda pode ser realizada.";
        } else {
            return "Quantidade insuficiente em estoque. Ajuste a quantidade.";
        }
    }
}

console.log(venda.verificarEstoque(5)); // Venda pode ser realizada.
console.log(venda.verificarEstoque(1)); // Quantidade insuficiente em estoque. Ajuste a quantidade.