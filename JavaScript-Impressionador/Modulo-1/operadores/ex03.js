/* 

Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um
produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto
é R$ 300,00.
Exemplo de Saída: “Preço com desconto: R$ 250” e “Está dentro do orçamento? True”

*/

orcamento = 250
produto = 300
porcentagem = 17
desconto = produto * (porcentagem / 100) -1
precoDesconto = produto - desconto

console.log(`Preço com desconto: R$ ${precoDesconto} e está dentro do orçamento? `)

if(precoDesconto <= 250) {
    console.log("Está dentro do orçamento!")
} else {
    console.log("Orçamento insuficiente!")
}
