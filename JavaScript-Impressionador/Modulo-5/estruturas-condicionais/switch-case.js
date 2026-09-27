const usuario = { nome: "Felipe", idade: 32, time: "Flamengo" };
const mensagem1 = "Bem vindo, torcedor Tricolor!";
const mensagem2 = "Bem vindo, torcedor Rubro-Negro!";

switch (usuario.time) {
    case "Fluminense":
        console.log(mensagem1);
        break;
    case "Flamengo":
        console.log(mensagem2);
        break;
    default:
        console.log("Bem vindo, amante do esporte!");
}
