/* Média utilizando operador lógico (e) && */
let n1 = 10
let n2 = 7
let n3 = 5

let media = (n1 + n2 + n3)/3

if(media < 5) {
    console.log("Reprovado!")
} else if(media >= 5 && media < 7){
    console.log("Recuperação!")
} else {
    console.log("Aprovado!")
}

// & (AND) - ambas as condições são verdadeiras.
let idade = 20;
let condigoPromocional = true;

let idade2 = 15;

//Verificação se o usuário tem idade suficiente e possui um código
let podeFazerLogin = idade >= 18 && condigoPromocional; // true
console.log(podeFazerLogin);

let podeFazerLogin2 = idade2 >= 18 && condigoPromocional; // false;
console.log(podeFazerLogin2);

// || (OR) - apenas uma condição é verdadeira.
let loginOr = idade >= 18 || condigoPromocional; // true;
let loginOr2 = idade2 >= 18 || condigoPromocional; // true;
console.log(loginOr);
console.log(loginOr2);

let promocional = false;
console.log(idade2 >= 18 || promocional); // false;

// ! (NOT) inverte valor booleano
let perfilConfigurado = false;

//Verificação se o perfil não está configurado
let alerta = !perfilConfigurado;
console.log(alerta);
