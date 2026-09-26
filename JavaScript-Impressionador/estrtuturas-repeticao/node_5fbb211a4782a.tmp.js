/* let c = 1;
while (c <= 5) {
    console.log(c);
    c++;
}

console.log("Contagem encerrada!");

let functionariosRegistrados = 0;

while (functionariosRegistrados < 3) {
    console.log(
        "Funcionário " +
            (functionariosRegistrados + 1) +
            ": Registrou suas horas de trabalho!",
    );
    functionariosRegistrados++;
}

console.log("Fim de registros"); */

// Simulador de Aplicativo de corrida

let nome = "Felipe";
let partida = "Rua dos desenvolvedores junior";
let destino = "Parque do Milagre n° 50";

function registrar(nome) {
    while (true) {
        if (nome === "") {
            console.log("Preencha com o nome: ");
        } else if (typeof nome !== "string") {
            console.log("Nome inválido, preencha novamente.");
        } else {
            console.log(`Usuário ${nome} registrado com sucesso!`);
        }
    }
}

registrar(nome);