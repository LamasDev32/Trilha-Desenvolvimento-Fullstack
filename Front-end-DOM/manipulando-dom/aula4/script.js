const listaItens = document.getElementById('lista').getElementsByTagName('li');

const paragrafos = document.getElementById('conteudo').querySelectorAll('p');

/* Acessando o segundo elemento de um HTMLCollection */

console.log("Segundo elemento: ", listaItens[1]);

/* Acessar os elementos do Nodelist utilizando looping */

for(content in paragrafos) {
    console.log(paragrafos[content]);
}

// Acessando o segundo paragrafo
console.log(paragrafos[1])