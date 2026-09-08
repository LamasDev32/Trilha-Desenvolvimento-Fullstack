/* 

Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda.
Exiba as propriedades e valores em um formato legível.

*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0.1
};

const propriedadesEValores = Object.entries(venda); // Retorna um array de arrays com as propriedades e valores do objeto

propriedadesEValores.forEach(([propriedade, valor]) => { // Itera sobre cada par de propriedade e valor
    console.log(`${propriedade}: ${valor}`); // Exibe a propriedade e o valor em um formato legível
});

console.log(propriedadesEValores); // Exibe o array completo de propriedades e valores