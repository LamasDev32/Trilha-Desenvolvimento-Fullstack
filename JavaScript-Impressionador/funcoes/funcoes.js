/* function saudacao(nome) {
    nome = prompt(`Informe seu nome: `)
    alert(`Seja bem-vindo: ${nome}`)
}

saudacao() */

let saudacao = (nome) => {
    nome = prompt(`Como gostaria de ser chamado: `);
    alert(`Seja bem-vindo: ${nome}`);
};

function login(usuario, senha) {
    usuario = prompt(`Informe seu usuário: `);
    senha = prompt(`Digite sua senha: `);
    if (usuario !== null && senha !== null) {
        return saudacao();
    } else {
        alert(`Usuário e senha invalidos!`);
    }
}

login();
