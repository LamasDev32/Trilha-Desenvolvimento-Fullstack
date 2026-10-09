/* 

Exercício 10: Crie uma função que receba uma palavra e retorne um booleano indicando se a
palavra é um palíndromo.
Função: ehPalindromo
Exemplo Entrada: // ehPalindromo("arara");
// ehPalindromo("cachorro");
Exemplo Saída: // true
// false

*/

function ehPalindromo(palavra) { // Função para verificar se a palavra é um palíndromo
    const palavraNormalizada = palavra.toLowerCase().replace(/[^a-z0-9]/g, ""); // Normaliza a palavra, removendo espaços e caracteres especiais
    const palavraInvertida = palavraNormalizada.split("").reverse().join(""); // Inverte a palavra normalizada
    return palavraNormalizada === palavraInvertida; // Compara a palavra normalizada com a invertida e retorna true se forem iguais, caso contrário, retorna false
}

console.log(ehPalindromo("arara")); // true - verdadeiro
console.log(ehPalindromo("cachorro")); // false - falso