/* 

Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda.
Exiba as propriedades do objeto.

*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0.1
};

const propriedades = Object.keys(venda); // Retorna um array com os nomes de todas as propriedades do objeto
console.log(propriedades); // Exibe as propriedades do objeto