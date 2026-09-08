let inteiro = 42;
let real = 3.4567;

// Verificar se um número é inteiro
console.log(Number.isInteger(inteiro));

// Verificar se um número é inteiro
console.log(Number.isInteger(real));

// Verificar se um número é NaN (Not a Number)
console.log(Number.isNaN(inteiro));

// Verificar se um número é float (número decimal)
console.log(Number.isInteger(real) === false);

// Formatar um número para uma quantidade específica de casas decimais
console.log(real.toFixed(2));

// Arredondar um número para cima
console.log(Math.ceil(real));

// Arredondar um número para baixo
console.log(Math.floor(real));

// Arredondar um número para o valor mais próximo
console.log(Math.round(real));

// Formatar número precisão específica
console.log(real.toPrecision(3));

// Formatar número precisão específica
console.log(inteiro.toPrecision(1)); // Formatar número precisão específica trazendo a notação científica

console.log(inteiro.toPrecision(2)); // Formatar número precisão específica trazendo o número inteiro

console.log(inteiro.toPrecision(3)); // Formatar número precisão específica retorna o número real com a quantidade de casas decimais especificadas
