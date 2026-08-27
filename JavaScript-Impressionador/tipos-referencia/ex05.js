/* 

Exercício 5: Manipulação dos Tipos Referências
a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
c. Crie um objeto funcionario e atribua seus valores para um novo objeto
novoFuncionario.
d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
alterado.

*/

let estoque = ['Notebook', 'Tablet', 'Celular']
let novoEstoque = [...estoque]
novoEstoque.push('Gambiarra')
console.log(estoque)
console.log(novoEstoque)

let Funcionario = {
    nome: 'Felipe',
    cargo: 'Desenvolvedor Front-end',
    salario: 2800
}

let NovoFuncionario = {...Funcionario}
NovoFuncionario.nome = 'Kethleen'
NovoFuncionario.cargo = 'Dona de Casa'

console.log(Funcionario)
console.log(NovoFuncionario)
