/* Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
idade com base na data atual. Exiba a idade no console.
Exemplo Entrada: // 1990-05-15
Exemplo Saída: // Idade: 34
Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
Exiba o resultado no console.
Exemplo Entrada: // 2024-10-07
Exemplo Saída: // Data formatada no padrão brasileiro: 07/10/2024 */

function calcularIdade(dataNascimento) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate() + 1;
    const anoNascimento = dataNascimento.getFullYear();
    const idade = anoAtual - anoNascimento;
    console.log(`Idade: ${idade}`);
}

// Exemplo de uso da função
const dataNascimentoExemplo = new Date("1994-03-09");
calcularIdade(dataNascimentoExemplo);

function formatarDataParaPadraoBrasileiro(data) {
    const dia = String(data.getDate() + 1).padStart(2, '0'); // Adiciona 1 ao dia para corrigir a diferença de fuso horário e usa padStart para garantir que o dia tenha dois dígitos, adicionando um zero à esquerda se necessário.
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Adiciona 1 ao mês para corrigir a diferença de fuso horário e usa padStart para garantir que o mês tenha dois dígitos, adicionando um zero à esquerda se necessário.
    const ano = data.getFullYear(); 
    const dataFormatada = `${dia}/${mes}/${ano}`; // Formata a data no padrão brasileiro (dia/mês/ano) usando template literals para criar a string final.
    console.log(`Data formatada no padrão brasileiro: ${dataFormatada}`); // Exibe a data formatada no console.
}

// Exemplo de uso da função
const dataExemplo = new Date("2026-09-09");
formatarDataParaPadraoBrasileiro(dataExemplo);