/* 

Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de
um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.


*/

// Exemplo de função recursiva para calcular o valor total das vendas de hambúrgueres no mês
function calcularVendasHamburgueres(vendasDiarias) {
    if (vendasDiarias.length === 0) { // Caso base: se não houver mais vendas diárias, retorna 0
        return 0;
    }

    const vendasHoje = vendasDiarias[0]; // Número de hambúrgueres vendidos hoje
    const vendasRestantes = vendasDiarias.slice(1); // Cria um novo array com os elementos restantes

    const totalVendasRestantes = calcularVendasHamburgueres(vendasRestantes); // Chamada recursiva para calcular o total das vendas restantes

    return vendasHoje * 10 + totalVendasRestantes; // Cada hambúrguer custa R$10
} 

const vendasDiarias = [5, 8, 10, 7, 6, 9, 12, 11, 15, 20, 18, 16, 20, 42, 30, 41, 12, 27, 10, 55, 73, 55, 20, 32, 25, 27, 18, 19, 17, 30]; // Exemplo de vendas diárias ao longo do mês
const valorTotalVendas = calcularVendasHamburgueres(vendasDiarias); // Chamada da função para calcular o valor total das vendas de hambúrgueres no mês
console.log("Valor total das vendas de hambúrgueres no mês: R$" + valorTotalVendas); // Exibe o valor total das vendas de hambúrgueres no mês

// Exemplo de uso do loop for para exibir o número de hambúrgueres vendidos e o valor das vendas de hambúrgueres hoje
for (let i = 0; i < vendasDiarias.length; i++) {
    const vendasHoje = vendasDiarias[i]; // Número de hambúrgueres vendidos hoje
    const valorVendasHoje = vendasHoje * 10; // Calcula o valor das vendas de hambúrgueres hoje (cada hambúrguer custa R$10)
    console.log(`Dia ${i + 1}: Vendas de hambúrgueres: ${vendasHoje}, Valor das vendas: R$${valorVendasHoje}`); // Exibe o número de hambúrgueres vendidos e o valor das vendas de hambúrgueres hoje
}