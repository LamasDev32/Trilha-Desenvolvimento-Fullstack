/* 

Exercício 15: Crie uma função que receba um array de nomes de investimentos que você
quer fazer e um segundo parâmetro com seu nome.
Função: gerarListaInvestimentos
Exemplo Entrada: //const investimentos = [5000, 2000, 15000];
const nome = "Maria";
const resultado = gerarListaInvestimentos(investimentos1, nome1);
Exemplo Saída:
// [
{ investimento: 2000, nome: "Maria" },
{ investimento: 5000, nome: "Maria" },
{ investimento: 15000, nome: "Maria" }
]

*/

// Função que recebe um array de investimentos e um nome, e retorna um array de objetos com as propriedades investimento e nome
function gerarListaInvestimentos(investimentos, nome) {
    return investimentos.map(investimento => ({ investimento, nome })); // Cria um novo array de objetos com as propriedades investimento e nome
}

// Exemplo de uso da função
const investimentos1 = [5000, 2000, 15000]; // Array de investimentos
const nome1 = "Maria"; // Nome a ser associado aos investimentos
const resultado = gerarListaInvestimentos(investimentos1, nome1); // Chama a função gerarListaInvestimentos com os parâmetros investimentos1 e nome1
console.log(resultado); // Exibe o resultado no console