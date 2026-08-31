let pedido = {
    id: 1234,
    nome: "Felipe",
    email: 'lfdev32@lipe.com',
    lanche: 12,
    batataFrita: 6,
    suco: 4,
};

function enviarNotificacao(nome, idPedido, email) {
    console.log(`Enviando email para ${email} confirmando o pedido de número ${idPedido}`);
    console.log(`Mensagem: ${nome} pedido confirmado`);
}

enviarNotificacao(pedido.nome, pedido.id, pedido.email)

function processarPedido(id, item1, item2, item3){
    let totalPedido = item1 + item2 + item3;
    console.log(`Pedido: ${id} Processado`);
    console.log(`O total do pedido é: ${totalPedido}`);
    return totalPedido;
}

processarPedido(pedido.id, pedido.lanche, pedido.batataFrita, pedido.suco);