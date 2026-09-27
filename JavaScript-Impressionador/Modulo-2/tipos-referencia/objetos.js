// Objetos

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "Prata",
    airbag: true,
    itens: ["abs", "4 portas", "step"],
};

//Acessar os valores das propriedades (chaves)

// console.log(carro.marca);
// console.log(carro.modelo);
// console.log(carro.ano);
// console.log(carro.cor);
// console.log(carro.airbag);
// console.log(carro.itens);

console.log(carro["modelo"]);
console.log(carro);

carro.kmRodados = 15000;
console.log(carro);

let Pessoa = {
    nome: "Felipe",
    idade: 32,
    cor: "branco",
    sexo: "M"
}

Pessoa.cpf = '111.111.111-11'

console.log(Pessoa['nome'])
console.log(Pessoa)
console.log(Pessoa.idade)