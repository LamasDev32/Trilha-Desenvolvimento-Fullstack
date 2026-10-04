/* 

Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja feita. 
Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da lanchonete.

*/

function realizarVendas(totalVendas) {
    let dinheiroRecebido = 0;
    let vendasConcluidas = false;
    let vendasRealizadas = 0;

    while (!vendasConcluidas) {
        const valorDaVenda = 20;

        dinheiroRecebido += valorDaVenda;
        vendasRealizadas++;

        if (vendasRealizadas >= totalVendas) {
            vendasConcluidas = true;
            console.log(`Vendas concluídas! Total de vendas realizadas: ${vendasRealizadas}`);
            console.log(`Total de dinheiro recebido: R$${dinheiroRecebido.toFixed(2)}`);
        }
    }
}

realizarVendas(5);