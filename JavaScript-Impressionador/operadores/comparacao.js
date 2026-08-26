//Igualdade e Estrita Igualdade
console.log(5 == "5");
console.log(5 === "5"); // boa prática

console.log(5 != "5");
console.log(5 !== "5"); // boa prática

// Maior e Menor
console.log(10 > 20); //false
console.log(10 > 10); //false
console.log(10 >= 10); //true
console.log(10 < 20); //true
console.log(10 < 10); //false
console.log(10 <= 10); //true

let senha = 1234;
let senhaDigitada = 12345;

/* Utilização prática de verificação simpes de senha. */

if(senhaDigitada !== senha) {
    console.log("Senha incorreta. Acesso negado!")
} else {
    console.log("Seja bem-vindo!")
}
