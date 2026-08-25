/* 

1. var (Escopo de Função)
Variáveis declaradas com var vazam de blocos condicionais (if) e laços de repetição (for), ficando visíveis em toda a função onde foram criadas.

if (true) {
    var nome = "Ana";
}

console.log(nome); // Imprime "Ana" (vazou do bloco if)

2. let (Escopo de Bloco)
Respeita o bloco limitado por chaves {} (if, for, while, etc.). Só existe dentro daquele contexto.

if (true) {
    let idade = 25;
}

console.log(idade); // ReferenceError: idade is not defined

3. const (Escopo de Bloco e Imutabilidade de Referência)
Funciona no mesmo escopo que o let, mas impede a reatribuição da variável.

const pais = "Brasil";
pais = "Chile"; // TypeError: Assignment to constant variable.

// Nota: Em objetos e arrays declarados com const, os valores internos podem mudar:
const usuario = { nome: "Lucas" };
usuario.nome = "Pedro"; // Permitido! A referência do objeto não mudou.

Boa prática moderna: Use const por padrão para evitar reatribuições acidentais. 
Use let apenas quando souber que o valor da variável precisará mudar (ex: contadores em loops). 
Evite usar var no JavaScript moderno (ES6+).

*/
