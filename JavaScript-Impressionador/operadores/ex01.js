/* 

Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00.
Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do
produto após aplicar o desconto e o imposto.
Exemplo de Saída: // “Preço final do produto: R$ 172”

*/

let precoProduto = 200;
let desconto = 40;
let imposto = 12;

let produtoComDesconto = precoProduto - desconto + imposto;

console.log(`Preço final do produto: R$ ${produtoComDesconto}`);
