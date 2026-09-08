let inteiroString = "42";
let realString = "32.7869";

// Converter string para número
let inteiro = parseInt(inteiroString);
let real = parseFloat(realString);

console.log(inteiro); // Saída: 42
console.log(real); // Saída: 32.7869

// converter número para string
let inteiroStringConvertido = inteiro.toString();
let realStringConvertido = real.toString();

console.log(typeof inteiroStringConvertido); // Saída: "string"
console.log(realStringConvertido); // Saída: "string"

// Converter um inteiro para uma String - opcional - base numérica
let numero = 42; // base decimal
console.log(numero.toString()); // base decimal 42
console.log(numero.toString(10)); // base decimal 42
console.log(numero.toString(2)); //base binária 101010
console.log(numero.toString(8)); // base octal 52
// 2 - 36

//Converter uma string para um número inteiro, considerando a base numérica (opcional)
console.log(Number.parseInt(realString, 16));
console.log(Number.parseInt(inteiroString));

console.log(Number.parseFloat(realString).toFixed(2));