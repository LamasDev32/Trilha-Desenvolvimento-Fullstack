/* 
Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
produtos e remova o item 'sofá' da lista.
Exemplo de Saída: “["cadeira", "mesa", "armário"]
*/


let str = 'cadeira, mesa, sofá, armário';
let produtos = str.split(', '); // divide a string em um array de produtos usando a vírgula e o espaço como delimitador
let indexSofa = produtos.indexOf('sofá'); // encontra o índice do item 'sofá' no array  
if (indexSofa !== -1) { // verifica se o item 'sofá' foi encontrado no array
    produtos.splice(indexSofa, 1); // remove o item 'sofá' do array
}
console.log(produtos);

let lista = 'cadeira, mesa, sofá, armário';
let arrayProdutos = lista.split(', '); // divide a string em um array de produtos usando a vírgula e o espaço como delimitador
let novaLista = arrayProdutos.filter(item => item !== 'sofá');
console.log(novaLista); // exibe o array resultante sem o item 'sofá'

let produtosString = 'cadeira, mesa, sofá, armário';
let array = produtosString.split(', '); // divide a string em um array de produtos usando a vírgula e o espaço como delimitador
array.splice(array.indexOf('sofá'), 1); // remove o item 'sofá' do array
console.log(array); // exibe o array resultante sem o item 'sofá'