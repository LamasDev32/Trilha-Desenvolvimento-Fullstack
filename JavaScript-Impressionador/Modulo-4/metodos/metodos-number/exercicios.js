/* 

Explicação completo de cada exercício do arquivo exercicios.js

Exercício 1: Converta valores de texto em números
Neste exercício, você tem valores em formato de texto, como "150.50" ou "200px". O objetivo é convertê-los para números reais. 
Para isso, utilizamos os métodos Number.parseFloat() e Number.parseInt(). 
O primeiro converte uma string em um número de ponto flutuante, enquanto o segundo converte uma string em um número inteiro, 
descartando qualquer caractere não numérico após o número.

Exercício 2: Somar valores numéricos de uma entrada de formulário
Neste exercício, você recebe dois valores numéricos como strings. O objetivo é convertê-los para números e somá-los corretamente. 
Utilizamos Number.parseFloat() para converter as strings em números de ponto flutuante antes de realizar a soma.

Exercício 3: Arredonde valores financeiros
Neste exercício, você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas casas decimais. 
Utilizamos o método toFixed(2) para arredondar o número para duas casas decimais. 
Além disso, utilizamos toPrecision(6) para exibir o número com uma precisão específica.

Exercício 4: Ajustar a precisão de um número
Neste exercício, você tem um número muito grande e precisa exibi-lo com uma precisão específica. 
Utilizamos o método toPrecision(4) para exibir o número com 4 dígitos no total. 
O método toFixed() também é utilizado, mas neste caso, ele não funcionou para o exercício específico.

Exercício 5: Verificar se a entrada é um número válido
Neste exercício, você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de realizar qualquer operação. 
Utilizamos Number.isNaN() para verificar se a entrada convertida é NaN (Not A Number). 
Se for NaN, significa que a entrada não é um número válido. Caso contrário, a entrada é considerada válida.

Exercício 6: Verificar se o número é finito
Neste exercício, você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos. 
Utilizamos Number.isFinite() para verificar se o número é finito. 
Se o número for Infinity ou NaN, a função retornará false, indicando que o número não é finito. 
Caso contrário, retornará true, indicando que o número é finito e pode ser usado em cálculos.

*/

//Exercício 1: Converta valores de texto em números
//Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
//convertê-los para números reais.
const valor1 = "150.50";
const valor2 = "200px";
const valor3 = "abc";

console.log(Number.parseFloat(valor1)); // Converter o número utilizando o ponto flutuante
console.log(Number.parseInt(valor2)); // Converte 200 (descarta px)
console.log(typeof Number(valor3)); // Retorna NaN (Não é um número) - tipo de dado é Number

// Exercício 2: Somar valores numéricos de uma entrada de formulário
//Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.
const numero1 = "10";
const numero2 = "20.5";

const soma = Number.parseFloat(numero1) + Number.parseFloat(numero2);
console.log(soma);
const soma2 = parseFloat(numero1) + parseFloat(numero2); // por debaixo dos panos
console.log(soma2);

// Exercício 3: Arredonde valores financeiros
//Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
//casas decimais.
const valorFinanceiro = 1234.56789;
const valorFormato = valorFinanceiro.toFixed(2);
console.log(`Valor formatado: ${valorFormato}`); // 1234.57
console.log("Com precisão: " + valorFinanceiro.toPrecision(6));

//Exercício 4: Ajustar a precisão de um número
//Você tem um número muito grande e precisa exibi-lo com uma precisão específica.
const valorGrande = 12345.6789;
// Exibir com 4 dígitos no total
const valorComPrecisao = valorGrande.toPrecision(4);
console.log(`Valor com precisão é: ${valorComPrecisao}`); // 1.235e+4
console.log("Com fixed: " + valorGrande.toFixed()); // padrão 0 casas decimais - Não funcionou para esse exercício

// Exercício 5: Verificar se a entrada é um número válido
//  Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
//  realizar qualquer operação.
const entrada = "123abc";
const entradaValida = "123";

//NaN - isNaN (true/false)
const entradaConvertida = Number(entrada);
const entradaValidaConvertida = Number(entradaValida);
//console.log(entradaConvertida);
//console.log(entradaValidaConvertida);

console.log(
    Number.isNaN(entradaConvertida) + " Entrada inválida, valor não é um número"
); //NaN - entrada inválida = true;
console.log(
    Number.isNaN(entradaValidaConvertida) + " Entrada válida. Número correto"
); // 123 - entrada válida = false

//Segunda forma
console.log(
    Number.isNaN(entradaConvertida) ===
    false + " Entrada inválida, valor não é um número"
); //false (entrada inválida);
console.log(
    Number.isNaN(entradaValidaConvertida) ===
    false + " Entrada válida. Número correto."
); // true (entrada válida);

//  Exercício 6: Verificar se o número é finito
//  Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
const numero = 1 / 0;
const notNumber = NaN;
const string = "abc";

const valorValido = 123;

console.log(numero);
console.log(notNumber);
console.log(string);

console.log(Number.isFinite(numero)); // false
console.log(Number.isFinite(notNumber));
console.log(Number.isFinite(string));
console.log(isFinite(valorValido)); // true
