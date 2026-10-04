/* 
Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
se o desconto foi aplicado corretamente. 
*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0.1,
    calcularTotal: function() {
        const total = this.quantidade * this.precoUnitario * (1 - this.desconto);
        return total;
    }
};

const descontoEspecial = {
    ...venda, // Copia todas as propriedades e valores do objeto venda
    desconto: 0.2 // Altera o valor da propriedade desconto para 20%
};

console.log(`Produto: ${descontoEspecial.produto}`);
console.log(`Quantidade: ${descontoEspecial.quantidade}`);
console.log(`Preço Unitário: R$ ${descontoEspecial.precoUnitario.toFixed(2)}`);
console.log(`Desconto: ${descontoEspecial.desconto * 100}%`);
console.log(`Total da venda com desconto especial: R$ ${descontoEspecial.calcularTotal().toFixed(2)}`);