/* 

Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos pendentes. 
Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista.

*/

const pedidosPendentes = ["Hamburguer", "Batata Frita", "Refrigerante", "Milkshake", "Salada de Frutas"];

function entregarPedidos(pedidos) {
    let pedidosEntregues = 0;
    let entregasConcluidas = false;

    while (!entregasConcluidas && pedidosEntregues < pedidos.length) {
        console.log(`Entregando ${pedidos[pedidosEntregues]}`);
        pedidosEntregues++;

        if (pedidosEntregues >= pedidos.length) {
            entregasConcluidas = true;
            console.log(`Todas as entregas foram concluídas!`);
        }
    }
}

entregarPedidos(pedidosPendentes);