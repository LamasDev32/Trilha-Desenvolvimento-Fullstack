/* 

Exercício 16: Crie uma função que receba uma frase e codifique as vogais de acordo com a
seguinte substituição: a → 1, e → 2, i → 3, o → 4, u → 5. Crie uma segunda função que
decodifique a frase, revertendo as substituições.
Funções: codificar e decodificar
Exemplo Entrada: // const frase = "a casa e o sol";
const resultado = codificar(frase);
const frase2 = "1 c1s2 2 4 s4l";
const resultado2 = decodificar(frase2);
Exemplo Saída: // "1 c1s2 2 4 s4l"
// "a casa e o sol"

*/

function codificar(frase) {
    const codificacao = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' }; // Mapeamento das vogais para os números correspondentes
    let fraseCodificada = ''; // Inicializa a string que armazenará a frase codificada
    for (let i = 0; i < frase.length; i++) { // Itera sobre cada caractere da frase
        const caractere = frase[i]; // Obtém o caractere atual
        fraseCodificada += codificacao[caractere] || caractere; // Se o caractere for uma vogal, substitui pelo número correspondente; caso contrário, mantém o caractere original
    }
    return fraseCodificada; // Retorna a frase codificada
}

// Testando a função codificar

const frase = "a casa e o sol";
const resultado = codificar(frase);
console.log(resultado); // "1 c1s2 2 4 s4l"


function decodificar(frase) { // Função para decodificar a frase
    const decodificacao = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }; // Mapeamento dos números para as vogais correspondentes
    let fraseDecodificada = ''; // Inicializa a string que armazenará a frase decodificada
    for (let i = 0; i < frase.length; i++) { // Itera sobre cada caractere da frase
        const caractere = frase[i]; // Obtém o caractere atual
        fraseDecodificada += decodificacao[caractere] || caractere; // Se o caractere for um número correspondente a uma vogal, substitui pela vogal; caso contrário, mantém o caractere original
    }
    return fraseDecodificada; // Retorna a frase decodificada
}

// Testando a função decodificar

const frase2 = "1 c1s2 2 4 s4l";
const resultado2 = decodificar(frase2);
console.log(resultado2); // "a casa e o sol"