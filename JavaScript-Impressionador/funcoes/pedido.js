let pedido = {
    id: 1234,
    nome: 'Felipe',
    email: 'fplamas@fp.com',
    lanche: 12,
    batataFrita: 6,
    suco: 4,
};

function enviarNotificacao(nome, idPedido, email) {
    console.log(`Enviando email para ${email} confirmando o pedido de número ${idPedido}`);
};

console.log(`Mensagem ${nome} pedido confirmado`)