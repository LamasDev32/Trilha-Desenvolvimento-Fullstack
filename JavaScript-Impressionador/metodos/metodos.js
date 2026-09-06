function saudacao(nome) {
    return `Olá, ${nome};`
}

console.log(saudacao("Felipe"))


const pessoa = {
    nome: "Felipe",
    saudacao: function() {
        return `Olá, ${pessoa.nome}`
    }
}

console.log(pessoa.saudacao()) 