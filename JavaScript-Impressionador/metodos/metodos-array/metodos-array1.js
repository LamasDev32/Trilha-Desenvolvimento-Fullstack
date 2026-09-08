/* 

Métodos de Array - Adicionar e Remover Elementos Final e Início da Lista 

*/
let produtos = ["Carrinho", "Boneca", "Bola"];

produtos.push(50, 10, 30); //Adicionar ao final da lista
console.log(produtos);

produtos.unshift("Video Game"); // Adicionar no inicio da lista
console.log(produtos);

produtos.pop(); // remover o último elemento
console.log(produtos);

produtos.shift(); // remove o primeiro elemento
console.log(produtos);

/* 

Métodos de Array - Ordenar e Combinar Elementos

*/

let letras = ["d", "g", "a", "h", "b", "f", "c", "e"];
let numeros = [1, 6, 5, 4, 10, 8, 20, 19, 3];

letras.sort(); // ordenando os elementos
console.log(letras);

letras.reverse(); //reverter os elementos
console.log(letras);

numeros.sort((a, b) => a - b); // ordenando os números corretamente utilizando uma função de comparação que subtrai o segundo elemento do primeiro. Isso garante que os números sejam ordenados em ordem crescente.
console.log(numeros);

numeros.reverse((a, b) => b - a); // Para reverter a ordem dos elementos do array numeros, o método reverse() é utilizado. Isso inverte a ordem dos elementos no array, tornando o último elemento o primeiro e o primeiro elemento o último.
console.log(numeros);

let mesclaArray = letras.concat(numeros); // O método concat() é usado para mesclar dois ou mais arrays. Ele retorna um novo array contendo os elementos dos arrays originais, na ordem em que foram fornecidos. No caso acima, o array letras é mesclado com o array numeros, resultando em um novo array que contém todos os elementos de ambos os arrays.
console.log(mesclaArray);

/* 

Métodos de Array - Encontrar Elementos 

*/

let frutas = ["maça", "uva", "laranja"];

console.log(frutas.indexOf("laranja")); // O método indexOf() é usado para encontrar o índice de um elemento específico em um array. Ele retorna o índice da primeira ocorrência do elemento encontrado, ou -1 se o elemento não estiver presente no array. No caso acima, ele retorna o índice da string "laranja" no array frutas.

// console.log(frutas.splice(0, 1)); // inicio, quantidade de elementos
console.log(frutas.splice(2, 1, 10)); // substituir um elemento - inicio, quantidade, valor substituindo
console.log(frutas);

/* 

Métodos de Array - Verificar Elementos every e includes

*/

let frutas1 = ["maça", "melão", "manga", "kiwi"];

console.log(frutas1.includes("manga"));
console.log(frutas1.includes(50));

console.log(
    frutas1.every(function (fruta) { // verifica se todos os elementos do array frutas1 atendem a uma determinada condição. A função de callback fornecida verifica se cada elemento do array contém a substring "ma". O método every() retorna true se todos os elementos atenderem à condição, caso contrário, retorna false.
        return fruta.includes("ma");
    }),
); // todos os elementos
console.log(
    frutas1.some(function (frutas) { // verifica se pelo menos um elemento do array frutas1 atende a uma determinada condição. A função de callback fornecida verifica se cada elemento do array contém a letra "k". O método some() retorna true se pelo menos um elemento atender à condição, caso contrário, retorna false.
        return frutas.includes("k");
    }),
); // algum elemento

console.log(frutas1.join("outra palavra")); // O método join() é usado para concatenar todos os elementos de um array em uma única string, separando-os por um delimitador especificado. No caso acima, o delimitador fornecido é a string "outra palavra". Isso significa que cada elemento do array frutas1 será unido em uma única string, com a string "outra palavra" inserida entre cada elemento. O resultado final será uma string que contém todos os elementos do array frutas1, separados pela string "outra palavra".