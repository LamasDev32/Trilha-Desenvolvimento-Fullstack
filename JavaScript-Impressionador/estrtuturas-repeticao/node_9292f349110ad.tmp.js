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
            break;
        } else if (typeof nome !== "string") {
            console.log("Nome inválido, preencha novamente.");
            break;
        } else {
            console.log(`Usuário ${nome} registrado com sucesso!`);
            break;
        }
    }
}

registrar(nome);

function selecionar(partida, destino) {
    console.log("Selecione o local de partida e seu destino: ");
    while (partida !== destino) {
        if (partida === "" || typeof partida !== "string") {
            console.log("Local de partida precisa ser informado!");
        } else if (destino === "" || typeof destino !== "string") {
            console.log("Local de destino precisa ser informado!");
        } else {
            console.log(`Buscar passageiro ${partida} e leva para o destino: ${destino}`)
        }
    }
}

selecionar(partida, destino)
