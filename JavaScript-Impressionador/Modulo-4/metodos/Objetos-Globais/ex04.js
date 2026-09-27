/* 
Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
Exiba o resultado no console.
Exemplo Entrada: // 2026-01-01, 2026-09-09
Exemplo Saída: // Diferença em dias entre 2026-01-01 e 2026-09-09: 241
*/

function calcularDiferencaEmDias(data1, data2) {
    const diferencaEmMilissegundos = Math.abs(data2 - data1);
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24)); // Converte a diferença de milissegundos para dias exemplo: 1000 milissegundos * 60 segundos * 60 minutos * 24 horas que resulta em 1 dia e divide a diferença em milissegundos por esse valor para obter a diferença em dias.
    console.log(`Diferença em dias entre ${data1.toISOString().split('T')[0]} e ${data2.toISOString().split('T')[0]}: ${diferencaEmDias}`); // Exibe a diferença em dias no console, formatando as datas para o formato YYYY-MM-DD usando toISOString() e split('T')[0] para remover a parte do tempo.
}

// Exemplo de uso da função
const dataInicial = new Date("2026-01-01");
const dataFinal = new Date("2026-09-09");
calcularDiferencaEmDias(dataInicial, dataFinal);