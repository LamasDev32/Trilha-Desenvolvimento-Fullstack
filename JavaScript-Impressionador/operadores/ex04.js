/* 

Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em um
estoque como uma string ("20") e outra que representa a quantidade mínima necessária de
produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é
suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um
número. Imprima no console se a quantidade é suficiente ou não.
Exemplo de Saída: “A quantidade no estoque é suficiente: true”

*/

estoqueStr = '20'
qtMinimaEstoque = 20

estoque = Number(estoqueStr)

resultBoolean = estoque >= qtMinimaEstoque

if(resultBoolean) {
    console.log(`Qauntidade suficiente: ${resultBoolean}`)
} else {
    console.log(`Qauntidade suficiente: ${resultBoolean}`)
}