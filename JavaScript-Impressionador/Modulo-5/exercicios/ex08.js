/* 

Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo como argumento (um
número de 0 a 9) e retorna uma mensagem indicando o dia de rodízio em São Paulo, com base no último
dígito da placa.

*/

function verificarPlaca(ultimoDigito) {
    switch (ultimoDigito) {
        case 1:
        case 2:
            return "Segunda-feira";
        case 3:
        case 4:
            return "Terça-feira";
        case 5:
        case 6:
            return "Quarta-feira";
        case 7:
        case 8:
            return "Quinta-feira";
        case 9:
        case 0:
            return "Sexta-feira";
        default:
            return "Dígito inválido";
    }
}

console.log(verificarPlaca(1)); // Segunda-feira
console.log(verificarPlaca(3)); // Terça-feira
console.log(verificarPlaca(5)); // Quarta-feira
console.log(verificarPlaca(7)); // Quinta-feira
console.log(verificarPlaca(9)); // Sexta-feira
console.log(verificarPlaca(0)); // Sexta-feira
console.log(verificarPlaca(10)); // Dígito inválido
