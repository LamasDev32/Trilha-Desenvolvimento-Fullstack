/* 

Exercício 2: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional
de R$ 30,00. Calcule o preço de venda do produto.
Exemplo de Saída: // “Preço de venda do produto: R$ 130”

*/

let precoDeCusto = 100;
let lucro = 30
let precoDeVenda = precoDeCusto * (1 + lucro / 100);
console.log(`Preço de venda do produto: R$ ${precoDeVenda}`);
