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
console.log(resultado.sort((a, b) => a.investimento - b.investimento)); // Exibe o resultado no console, ordenado pelo valor do investimento

console.log("--------------------------------------------------");

// Resolução diferente utilizando o método forEach() para percorrer o array de investimentos e criar um novo array de objetos com as propriedades investimento e nome.
function gerarListaInvestimentos(investimentos, nome) {
    const resultado = []; // Cria um array vazio para armazenar os objetos
    investimentos.forEach(investimento => {
        resultado.push({ investimento, nome });
    });
    return resultado;
}

// Exemplo de uso da função
const investimentos2 = [10000, 5000, 20000];
const nome2 = "João";
const resultado2 = gerarListaInvestimentos(investimentos2, nome2);
console.log(resultado2.sort((a, b) => a.investimento - b.investimento)); // Exibe o resultado no console, ordenado pelo valor do investimento