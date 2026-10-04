/* 

Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de
um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.


*/

function calcularVendasHamburgueres(vendasDiarias) {
    if (vendasDiarias.length === 0) {
        return 0;
    }

    const vendasHoje = vendasDiarias[0];
    const vendasRestantes = vendasDiarias.slice(1);

    const totalVendasRestantes = calcularVendasHamburgueres(vendasRestantes);

    return vendasHoje * 10 + totalVendasRestantes; // Cada hambúrguer custa R$10
} 

const vendasDiarias = [5, 8, 10, 7, 6, 9, 12, 11, 15, 20, 18, 16, 20, 40, 30, 31, 12, 17, 10, 9, 33, 5]; // Exemplo de vendas diárias ao longo do mês
const valorTotalVendas = calcularVendasHamburgueres(vendasDiarias);
console.log("Valor total das vendas de hambúrgueres no mês: R$" + valorTotalVendas);

for (let i = 0; i < vendasDiarias.length; i++) {
    const vendasHoje = vendasDiarias[i];
    const valorVendasHoje = vendasHoje * 10;
    console.log(`Dia ${i + 1}: Vendas de hambúrgueres: ${vendasHoje}, Valor das vendas: R$${valorVendasHoje}`);
}
