/* 

// Exercício 1

function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`A média desse aluno é ${media.toFixed(2)}`);
}

*/

// Exercício 2

function calcularMediaAdaptado(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function calcularMediaFinal(nota1, nota2, nota3, notaF) {
    const mediaSemPf = calcularMediaAdaptado(nota1, nota2, nota3);
    const mediaFinal = (mediaSemPf + notaF) / 2;
    console.log(`A média final desse aluno é ${mediaFinal.toFixed(2)}`);
}

calcularMediaFinal(8, 5, 9, 8);

// Exercício 3

function conversorCelsiusParaFarenheit(temperaturaCelsius) {
    const farenheit = (9 / 5) * temperaturaCelsius + 32;
    console.log(`A temperatura em Farenheit é ${farenheit.toFixed(2)}°F`);
}

conversorCelsiusParaFarenheit(35)

// Exercício 4

function valorProdutoComImposto(valorEtiqueta) {
    const imposto = 0.08875;
    const valorFinal = valorEtiqueta * (1 + imposto);
    console.log(`Valor a ser pago: ${valorFinal.toFixed(2)}`)
}

valorProdutoComImposto(150);