/* 

Exercício 5: Verificação de Velocidade
Crie uma função verificarVelocidade que recebe a velocidade de um veículo como parâmetro e retorna true
se o veículo estiver dentro do limite de velocidade (limite igual ou inferior a 80 km/h) e false caso contrário,
utilizando o operador ternário.

*/

function verificarVelocidade(velocidade) {
    const dentroDoLimite = velocidade <= 80 ? true : false
    return dentroDoLimite;
}

const velocidadeExemplo = 75 
const dentroDoLimite = verificarVelocidade(velocidadeExemplo)
console.log(`Dentro do limite de velocidade? ${dentroDoLimite}`);