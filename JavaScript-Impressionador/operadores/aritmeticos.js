//Adição
let n1 = 10;
let n2 = 43;

console.log(n1 + n2);

// let mensagem = "20";
//console.log(mensagem + valor); // concatenação

//Subtração
console.log(n1 - n2);
console.log(n2 - n1);

//Divisão
console.log(n1 / n2);
console.log(n2 / n1);

// Módulo - (Resto da divisão)
console.log(n1 % n2);
console.log(n2 % n1);

let modulo = 10 % 2; // Resto da divisão
let divisao = 10 / 2;
console.log(modulo);
console.log(divisao);

//Adição + Subtração - Multiplicação * Divisão / Módulo % Inversão de sinal/negativo -

// Operadores Aritméticos avançados
//exponenciação **
let base = 2;
let expoente = 3;
let resultado = base ** expoente; // 2 seja elevado a 3
console.log(resultado);

//Incremento ++ (adicionar o valor 1) Decremento -- (diminuir o valor 1)
let controle = 0;
// console.log(controle++);
console.log(controle--);
console.log(controle);
console.log(controle--);
console.log(controle);

/* Conte de zero a 10 */
for (controle; controle < 11; controle++){
    console.log(controle);
}