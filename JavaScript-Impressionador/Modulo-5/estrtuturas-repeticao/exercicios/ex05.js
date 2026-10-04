/* 

Você deseja criar um programa que permite aos clientes da sua lanchonete adivinharem um número secreto para ganhar um desconto. 
Eles podem tentar quantas vezes quiserem, mas só ganharão o desconto quando adivinharem o número secreto. 
Crie um programa que use a estrutura do...while para permitir que os clientes tentem adivinhar o número secreto.

*/

function adivinharNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 100);

    let tentativa;
    let tentativas = 0;

    do {
        tentativa = Math.floor(Math.random() * 100); // Simulando a tentativa do cliente
        tentativas++;
        if(tentativa === numeroSecreto) {
            console.log(`Tentativa ${tentativas}: O cliente adivinhou o número secreto ${numeroSecreto}!`);
        };
    } while (tentativa !== numeroSecreto);

    console.log(`Parabéns! O cliente adivinhou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
}

adivinharNumeroSecreto();