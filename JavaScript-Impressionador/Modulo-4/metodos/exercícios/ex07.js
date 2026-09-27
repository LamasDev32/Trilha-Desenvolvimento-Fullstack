/* 

Exercício 7: Obtenha um array com todos os valores das propriedades do objeto Venda.
Exiba os valores das propriedades.

*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0.1
};

const valores = Object.values(venda); // Retorna um array com todos os valores das propriedades do objeto
console.log(valores); // Exibe os valores das propriedades do objeto

