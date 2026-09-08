/* 
Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e
valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto
NovaVenda. 
*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0.1
};

const novaVenda = {
    ...venda, // Copia todas as propriedades e valores do objeto venda
    produto: "Smartphone", // Altera o valor da propriedade produto
    quantidade: 5 // Altera o valor da propriedade quantidade
};

console.log(novaVenda); // Exibe o novo objeto NovaVenda