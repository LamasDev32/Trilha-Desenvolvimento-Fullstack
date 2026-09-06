/* 
Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
“Javascript”.
Exemplo de Saída: // “Aprendendo Javascript”
*/

let str = "Aprendendo Python";
let palavra = str.split(" ")[1]; // divide a string em um array de palavras e pega a segunda palavra

let novaString = str.replace(palavra, "Javascript"); // substitui a palavra "Python" por "Javascript"
console.log(novaString);