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

// Simulador de aplicativo de corrida
let nome = "João";
let partida = 'Rua do Dev juniro';
let destino = "Parque do cadê o emprego";

function registrar(nome) {
    while (true) {
        if (nome === "") {
            console.log("Preencha com o nome");
            break;
        } else if (typeof nome !== "string") {
            console.log("Nome inválido, preencha novamente!");
            break;
        } else {
            console.log(`Usuário ${nome} registrado com sucesso!`);
            break;
        }
    }

    // instruções
    selecionar(partida, destino);
}

// registrar(nome);

function selecionar(partida, destino) {
    console.log("Selecionar o local de partida e destino");

    while (partida !== destino) {
        if (partida === "" || typeof partida !== "string") {
            console.log("Local de partida precisa ser informado");
            break;
        } else if (destino === "" || typeof destino !== "string") {
            console.log("Destino inválido. Digite destino correto!");
            break;
        } else {
            console.log("Corrida confirmada!");
            break;
        }
    }
}

// selecionar(partida, destino);

registrar(nome);
