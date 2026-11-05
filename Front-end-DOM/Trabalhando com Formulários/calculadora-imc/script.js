document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("meuFormulario");
    const resultado = document.getElementById("resultado");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        calcularImc();
    });

    function calcularImc() {
        const pesoInput = document.getElementById("peso").value.replace(",", ".");
        const alturaInput = document.getElementById("altura").value.replace(",", ".");

        const peso = parseFloat(pesoInput);
        const altura = parseFloat(alturaInput);

        // Validação: verifica se os valores numéricos são válidos e maiores que zero
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultado.textContent = "Informe um valor válido para realizar o cálculo.";
            return;
        }

        const imc = peso / (altura * altura);
        const imcFormatado = imc.toFixed(2);

        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do Peso";
        } else if (imc < 25) {
            classificacao = "com Peso Normal";
        } else if (imc < 30) {
            classificacao = "com Sobrepeso";
        } else if (imc < 35) {
            classificacao = "com Obesidade Grau 1";
        } else if (imc < 40) {
            classificacao = "com Obesidade Grau 2";
        } else {
            classificacao = "com Obesidade Mórbida";
        }

        const nome = document.getElementById("name").value.trim();
        const inicioFrase = nome ? `${nome}, seu` : "Seu";
        
        resultado.style.display = "block";
        resultado.textContent = `${inicioFrase} IMC é ${imcFormatado} e você está ${classificacao}.`;
    }
});
