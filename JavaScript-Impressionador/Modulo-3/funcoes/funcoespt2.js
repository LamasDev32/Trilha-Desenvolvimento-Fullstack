function enviarMensagem() {
    console.log(
        "Pra continuar você precisa informar o seu nome para cadastro!",
    );
}

// enviarMensagem();

function cadastrar(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}, você foi cadastrado com sucesso!`);
}

// cadastrar("Felipe", "Lamas")

function banco(deposito, saque) {
    let saldo = deposito - saque;
    return saldo;
}

// console.log(banco(1000, 60));

function main() {
    enviarMensagem();
    cadastrar("Felipe", "Lamas");
    let saldo = banco(1000, 780);
    console.log(`O saldo atual é de ${saldo} reais`);
}

main();
