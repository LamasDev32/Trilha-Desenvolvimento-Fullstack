/* 

Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
maiúsculas.
Exemplo de Saída: // “JAVASCRIPT é divertido”

*/

let str1 = "javascript é divertido";
let strUpper = str1.replace("javascript", "JAVASCRIPT"); // substitui a palavra "javascript" por "JAVASCRIPT"
console.log(strUpper);

let str2 = "javascript é divertido";
console.log(str2.split("javascript").join("JAVASCRIPT")); // substitui a palavra "javascript" por "JAVASCRIPT" usando split e join

let texto = "javascript é divertido";
let palavras = texto.split(" "); // divide a string em um array de palavras
palavras[0] = palavras[0].toUpperCase(); // converte a primeira palavra para maiúsculas
console.log(palavras.join(" ")); // une as palavras novamente, com a primeira em maiúsculas