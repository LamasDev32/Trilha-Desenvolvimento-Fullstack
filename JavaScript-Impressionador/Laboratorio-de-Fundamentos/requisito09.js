/* 

Requisito 9: Crie uma função que receba um array de números e retorne a média desses
números.
Função: calcularMedia
Exemplo Entrada: // calcularMedia([10, 20, 30, 40]);
Exemplo Saída: // 25

*/

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

let notaFinal = calcularMedia([10, 7, 8, 9]); // 8.5

if (notaFinal >= 7) {
    console.log("Aprovado");
} else if (notaFinal >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

console.log(`A média das notas é: ${notaFinal}`);