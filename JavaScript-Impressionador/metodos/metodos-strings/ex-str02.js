/* 

Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
em seguida, converta essa palavra para letras minúsculas.
Exemplo de Saída: // “ aprendendo”

*/

let str = "Aprendendo Javascript";
let palavra = str.split(" ")[0]; // divide a string em um array de palavras e pega a primeira palavra
console.log(palavra.toLowerCase()); // converte a palavra para minúsculas e exibe no console

let str1 = "Aprendendo Javascript";
let palavra1 = str1.substring(0, 10); // extrai a palavra "Aprendendo" usando substring
console.log(palavra1.toLowerCase()); // converte a palavra para minúsculas e exibe no console