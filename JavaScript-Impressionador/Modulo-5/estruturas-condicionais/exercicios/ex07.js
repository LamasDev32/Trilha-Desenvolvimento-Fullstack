/* 

Exercício 7: Prioridade no Trânsito
Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como argumento (por
exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando se é seguro passar ou se é
necessário parar

*/

function coresDoSemaforo(corSemaforo) {
    let mensagem;

    switch (corSemaforo) {
        case "vermelho":
            mensagem = "Pare o veículo";
            break;
        case "amarelo":
            mensagem = "Reduza a velocidade";
            break;
        case "verde":
            mensagem = "Siga em frente";
            break;
        default:
            mensagem = "Cor inválida";
            break;
    }

    return mensagem;
}

// Testando a função
console.log(coresDoSemaforo("vermelho")); // Saída: "Pare o veículo"
console.log(coresDoSemaforo("amarelo")); // Saída: "Reduza a velocidade"
console.log(coresDoSemaforo("verde")); // Saída: "Siga em frente"
console.log(coresDoSemaforo("azul")); // Saída: "Cor inválida"