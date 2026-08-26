/* 

Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível como
um booleano (true), outra que representa a quantidade de produtos no estoque (10), e uma
terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique
se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade
mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto
está disponível e tem a quantidade suficiente.
Exemplo de Saída: “'O produto está disponível e tem quantidade suficiente: false” e “'O
produto está indisponível: false”

*/

produtoDisponivel = true
qtProdutosEstoque = 10
qtMinimaEstoque = 15

if(qtProdutosEstoque <= qtMinimaEstoque && produtoDisponivel) {
    produtoDisponivel = false
    console.log(`Produto disponível: ${produtoDisponivel}`)
} else {
    console.log(`Produto disponível: ${produtoDisponivel}`)
}