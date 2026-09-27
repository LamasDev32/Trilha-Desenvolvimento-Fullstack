let n1 = Number(prompt("1° nota do aluno: "));
let n2 = Number(prompt("2° nota do aluno: "));
let n3 = Number(prompt("3° nota do aluno: "));

let media = (n1 + n2 + n3) / 3;

if (media > 5 && media < 7) {
    alert("Aluno em recuperação");
} else if (media < 5) {
    alert("Aluno reprovado!");
} else if (media > 7) {
    alert("Aluno aprovado!");
} else {
    alert("Valor invalido!");
}
