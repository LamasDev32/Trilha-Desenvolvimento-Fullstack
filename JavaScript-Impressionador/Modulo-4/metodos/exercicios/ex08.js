/* 
Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a
verificação diretamente em uma mensagem fixa.
*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0.1
};

if (venda.hasOwnProperty('desconto')) { // Verifica se o objeto possui a propriedade 'desconto'
    console.log("O objeto Venda possui a propriedade desconto."); // Exibe mensagem se a propriedade existir
} else {
    console.log("O objeto Venda não possui a propriedade desconto."); // Exibe mensagem se a propriedade não existir
}

