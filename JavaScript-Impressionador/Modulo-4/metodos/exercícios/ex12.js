/* 
Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade
foi removida com sucesso e exiba as propriedades restantes do objeto. 
*/

const venda = {
    produto: "Notebook",
    quantidade: 2,
    precoUnitario: 3000,
    desconto: 0.1
};

delete venda.desconto; // Remove a propriedade 'desconto' do objeto venda

if (!venda.hasOwnProperty('desconto')) { // Verifica se a propriedade 'desconto' foi removida
    console.log("A propriedade desconto foi removida com sucesso."); // Exibe mensagem se a propriedade foi removida
}

const propriedadesRestantes = Object.keys(venda); // Obtém as propriedades restantes do objeto venda
console.log("Propriedades restantes do objeto Venda:", propriedadesRestantes); // Exibe as propriedades restantes do objeto