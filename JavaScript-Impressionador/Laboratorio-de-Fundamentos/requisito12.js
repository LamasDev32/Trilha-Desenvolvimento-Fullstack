/* 

Requisito 12: Crie uma função que receba uma frase e retorne a quantidade de palavras que
ela contém.
Função: contarPalavras
Exemplo Entrada: // contarPalavras("Olá, tudo bem?");
Exemplo Saída: // 3

*/
function contarPalavras(frase) {
    const palavras = frase.trim().split(/\s+/); // Remove espaços em branco e divide a frase em palavras
    return palavras.length; // Retorna a quantidade de palavras
}

console.log(contarPalavras("Olá, tudo bem?")); // 3