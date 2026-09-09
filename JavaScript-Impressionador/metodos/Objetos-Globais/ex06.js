/* Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
idade com base na data atual. Exiba a idade no console.
Exemplo Entrada: // 1994-03-09
Exemplo Saída: // Idade: 32
Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
Exiba o resultado no console.
Exemplo Entrada: // 2026-09-09
Exemplo Saída: // Data formatada no padrão brasileiro: 09/09/2026 */

function calcularIdade(dataNascimento) {
    const dataAtual = new Date();
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();
    const mesNascimento = dataNascimento.getMonth();
    const diaNascimento = dataNascimento.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    console.log(`Idade: ${idade}`);
}

function formatarDataBrasileira(data) {
    const dia = String(data.getDate() + 1).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    console.log(`Data formatada no padrão brasileiro: ${dia}/${mes}/${ano}`);
}

// Exemplo de uso das funções
const dataNascimento = new Date("1994-03-09");
calcularIdade(dataNascimento);

const dataExemplo = new Date("2026-09-09");
formatarDataBrasileira(dataExemplo);