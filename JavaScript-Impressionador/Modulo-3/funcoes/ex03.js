/* 

3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
tela o texto:
a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32

*/

function converterCelsiusParaFahrenheit() {
    let celsiusInput = prompt(`Digite a temperatura em graus Celsius: `);
    
    let celsius = Number(celsiusInput);

    let fahrenheit = (9/5) * celsius + 32;

    alert(`A temperatura correspondente em Farenheit é de ${fahrenheit.toFixed(2)}°F`);
}

converterCelsiusParaFahrenheit()