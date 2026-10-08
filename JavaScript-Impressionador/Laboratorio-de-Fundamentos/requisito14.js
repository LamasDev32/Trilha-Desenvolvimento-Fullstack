/* 

Requisito 14: Crie uma função que receba um array de despesas e retorne um novo array
contendo "Alto Gasto" para despesas maiores que 100 e "Gasto Controlado" para despesas
iguais ou menores que 100.
Função: controleDespesas
Exemplo Entrada: // const despesas = [150, 80, 200, 60, 120];
const resultado = controleDespesas(despesas);
Exemplo Saída: // ["Alto Gasto", "Gasto Controlado", "Alto Gasto", "Gasto Controlado", "Alto
Gasto"]


*/

// A função controleDespesas recebe um array de despesas e percorre cada elemento do array. 
// Para cada despesa, ela verifica se o valor é maior que 100. 
// Se for, adiciona "Alto Gasto" ao array resultado; caso contrário, adiciona "Gasto Controlado". 
// No final, a função retorna o array resultado.

function controleDespesas(despesas) {
    let resultado = [];
    for (let i = 0; i < despesas.length; i++) { // Percorre o array de despesas
        if (despesas[i] > 100) {
            resultado.push("Alto Gasto");
        } else {
            resultado.push("Gasto Controlado");
        }
    }
    return resultado;
}

const despesas = [150, 80, 200, 60, 120];
const resultado = controleDespesas(despesas);

// Exibe o resultado no console, mostrando o valor da despesa e o tipo de gasto correspondente
for (let i = 0; i < despesas.length; i++) {
    console.log(`Valor da despesa: R$ ${despesas[i]} - Gasto: ${resultado[i]}`);
}