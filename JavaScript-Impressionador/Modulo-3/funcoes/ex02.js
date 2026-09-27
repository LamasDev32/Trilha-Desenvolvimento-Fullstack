/* 

2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:
média_final = (média_antes_da_pf + pf)/2
Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar
necessário.
Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o
resultado do cálculo).

*/

function mediaAluno(nota1, nota2, nota3, notaF, media) {
    nota1 = Number(prompt(`Informe a primeiro nota do aluno: `));
    nota2 = Number(prompt(`Informe a segunda nota do aluno: `));
    nota3 = Number(prompt(`Informe a terceira nota do aluno: `));
    media = (nota1 + nota2 + nota3) / 3;

    if (media < 5) {
        alert(`Aluno reprovado com média ${media}`);
    } else if (media >= 5 && media < 7) {
        alert(`Aluno em recuperação com média ${media}`);
        notaF = Number(
            prompt(`Informe a nota final com prova de recuperação: `),
        );
        media = (nota1 + nota2 + nota3 + notaF)/4;
        if (media >= 7) {
            alert(
                `Após prova de recuperação o aluno está aprovado com média ${media}`,
            );
        } else {
            alert(
                `Mesmo após prova de recuperação o aluno está reprovado com média ${media}`,
            );
        }
    } else {
        alert(`Aluno aprovado com média ${media}`);
    }
}

mediaAluno();
