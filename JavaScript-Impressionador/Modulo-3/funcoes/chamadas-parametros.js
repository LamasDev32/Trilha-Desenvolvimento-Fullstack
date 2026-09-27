// function nomeFuncao(PARÂMETRO) { instrução }

function soma(numero1, numero2) {
    return numero1 + numero2
}

//nomeFunction(ARGUMENTO) - Chamada da função (executa o bloco de instruções)

console.log(soma(10, 5));

function calcularPrecoTotal(precoUnitario, quantidade) {
    let total = precoUnitario + quantidade;
    console.log("O total da sua compra é: " + total);
}

let camiseta = 30;
let quantidadeItem = 3; 

calcularPrecoTotal(camiseta, quantidadeItem);
