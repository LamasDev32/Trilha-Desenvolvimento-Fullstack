const pessoa = {
    cidade: "Rio de Janeiro",
    surf: true,
    falar: function () {
        console.log("Olá");
    },
};

const carro = {
    modelo: "Corolla",
    marca: "Toyota",
};

const joao = Object.create(pessoa); // Cria um novo objeto com o protótipo definido como pessoa atualmente, joao herda as propriedades e métodos de pessoa
Object.assign(joao, carro); // Adiciona as propriedades do objeto carro ao objeto joao 
joao.falar();
console.log(joao.cidade, joao.surf); // Acessando as propriedades herdadas do protótipo pessoa
joao.nome = "João";
joao.idade = 30;

console.log(joao);

console.log(joao.hasOwnProperty("surf")); // Verifica se a propriedade "surf" pertence diretamente ao objeto joao (retorna false, pois é herdada do protótipo pessoa)
console.log(joao.hasOwnProperty("nome")); // Verifica se a propriedade "nome" pertence diretamente ao objeto joao (retorna true, pois foi adicionada diretamente a joao)
