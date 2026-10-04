/* 

Você é o caixa de uma lanchonete e deseja calcular o total da conta com base nos itens pedidos por um
cliente. Crie um programa que use um loop for...in para percorrer o pedido do cliente (um objeto com itens e
quantidades) e calcule o valor total da conta.


*/

let pedido = {
    "Hambúrguer": 2,
    "Batata Frita": 1,
    "Refrigerante": 3
};

let total = 0;

for (let item in pedido) {
    let quantidade = pedido[item];
    let preco;

    switch (item) {
        case "Hambúrguer":
            preco = 10.00;
            break;
        case "Batata Frita":
            preco = 5.00;
            break;
        case "Refrigerante":
            preco = 3.00;
            break;
        default:
            preco = 0.00;
    }

    total += quantidade * preco;
}

console.log(`O total da conta é: R$ ${total.toFixed(2)}`);