/* 

Exercício 1: Verificação de Desconto
Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
retorno e o valor da compra no console.

*/

function calcularDesconto(valor, porcentagem) {
    const desconto = (valor * porcentagem) / 100;
    const valorFinal = valor - desconto;

    const formtarBRL = (f) =>
        f.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    return {
        valorOriginal: formtarBRL(valor),
        descontoAplicado: `${porcentagem}`,
        economia: formtarBRL(desconto),
        valorFinal: formtarBRL(valorFinal),
    };
}

console.log(calcularDesconto(100, 10));
