/* 

Exercício 2: Verificação de Produto em Estoque
Escreva um programa verificarEstoque que verifica se um produto está em estoque com base na quantidade
disponível. Se a quantidade disponível for maior que zero, exiba "Produto disponível", caso contrário, exiba
"Produto esgotado" no console

*/

function verificarEstoque(quantidadeDisponivel) {
    if (quantidadeDisponivel > 0) {
        console.log("Produto disponível");
    } else {
        console.log("Produto esgotado");
    }
}

// Exemplos de uso:
verificarEstoque(5); // Exibe: "Produto disponível"
verificarEstoque(0); // Exibe: "Produto esgotado"
