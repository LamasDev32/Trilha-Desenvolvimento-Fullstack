/* 
Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
nova propriedade data separadamente. 
*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0.1
};

Object.defineProperty(venda, 'data', {
    value: new Date(), // Define o valor da propriedade data como a data atual
    enumerable: false // Define a propriedade como não enumerável
});

console.log(Object.keys(venda)); // Exibe todas as propriedades enumeráveis do objeto Venda
console.log(venda.data); // Exibe o valor da nova propriedade data separadamente
