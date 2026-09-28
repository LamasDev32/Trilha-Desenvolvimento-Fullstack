/* 

Exercício 6: Semáforo de Trânsito
Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
"vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
do semáforo. Utilize o operador ternário para determinar a mensagem

*/

function mensagemSemaforo(corSemaforo) {
    const mensagem = corSemaforo === "vermelho" ? "Pare o veiculo" : corSemaforo === "amarelo" ? "Reduza a velocidade" : corSemaforo === ""
}