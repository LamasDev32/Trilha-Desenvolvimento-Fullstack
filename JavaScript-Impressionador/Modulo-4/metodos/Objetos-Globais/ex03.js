/* 

Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
resultados no console.
Exemplo Entrada: // 50, 100
Exemplo Saída: // Aleatório entre 0 e 1: 0.8629821531529918
Aleatório entre 0 e 100: 42.48780566605361
Aleatório entre 50 e 100: 63.70589822740784

*/

function gerarNumerosAleatorios(min, max) {
    const aleatorioEntre0e1 = Math.random().toFixed(2); // Gera um número aleatório entre 0 e 1 (inclusive)
    const aleatorioEntre0e100 = Math.random().toFixed(2) * 100; // Gera um número aleatório entre 0 e 100 com duas casas decimais 
    const aleatorioEntreMinEMax = Math.floor(Math.random() * (max - min + 1)) + min; // Gera um número inteiro aleatório entre min e max (inclusive) exemplo: Math.floor(Math.random() * (100 - 50 + 1)) + 50; // Gera um número inteiro aleatório entre 50 e 100 (inclusive)
    console.log(`Aleatório entre 0 e 1: ${aleatorioEntre0e1}`);
    console.log(`Aleatório entre 0 e 100: ${aleatorioEntre0e100}`);
    console.log(`Aleatório entre ${min} e ${max}: ${aleatorioEntreMinEMax}`);
}

// Exemplo de uso da função
const min = 50;
const max = 100;
gerarNumerosAleatorios(min, max);