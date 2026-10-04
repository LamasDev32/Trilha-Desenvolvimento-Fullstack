/* 

Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma
semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
semana. Crie um programa que calcule o valor total das vendas em uma semana.

*/

function calcularVendas(quantidades) {
    let totalVendas = 0;
    for (let i =0; i < quantidades.length; i++) {
        totalVendas += quantidades[i] * 10;
    }
    return totalVendas;
}

const vendaSemanal = [20, 15, 30, 25, 10, 5, 40]; // Quantidade de hambúrgueres vendidos em cada dia da semana
const total = calcularVendas(vendaSemanal);
console.log(`O valor total das vendas em uma semana é: R$${total}`);