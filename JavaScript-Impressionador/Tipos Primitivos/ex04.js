/* 

Modifique os valores das variáveis anteriores e imprima os novos valor no console

*/

let nome = "Felipe Lamas";
let idade = 32;
let isStudent = true;

function whatsStudent() {
    if (isStudent === true) {
        console.log(
            `Meu nome é ${nome} tenho ${idade} anos e sou estudante na hashtag-treinamentos`,
        );
    } else {
        console.log(
            `Meu nome é ${nome} tenho ${idade} anos e sou um vagabundo!`,
        );
    }
}

whatsStudent()

nome = "Cremildo Vacilão";
idade = 25;
isStudent = false;

whatsStudent()
