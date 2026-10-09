/* 

Exercício 7: Crie uma função que receba uma frase e retorne a quantidade de vogais contidas
nela.
Função: contarVogais.
Exemplo Entrada: // contarVogais("Olá, tudo bem?");
Exemplo Saída: // 5

*/

function contarVogais(frase){
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'à', 'è', 'ì', 'ò', 'ù', 'À', 'È', 'Ì', 'Ò', 'Ù', 'ã', 'õ', 'Ã', 'Õ', 'â', 'ê', 'î', 'ô', 'û', 'Â', 'Ê', 'Î', 'Ô', 'Û'];
    let quantidadeVogais = 0; // variável para armazenar a quantidade de vogais encontradas na frase
    for(let i = 0; i < frase.length; i++){ // loop para percorrer cada caractere da frase
        if(vogais.includes(frase[i])){ // verifica se o caractere atual é uma vogal
            quantidadeVogais++; // incrementa a quantidade de vogais encontradas
        }
    }
    return quantidadeVogais; // Retorna a quantidade de vogais
}

console.log(contarVogais("Olá, tudo bem?")); // 5