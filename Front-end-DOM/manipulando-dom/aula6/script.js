/* 
    - innerText - texto - leva em consideração a estilização CSS
    - innerContent - texto
    - innerHTML - todo tipo de conteúdo e textos
*/

function criarElementoInnerText() {
    const ul = document.getElementById('listaElementos');
    const novaLi = document.createElement('li');
    novaLi.innerText = "Não Torra com InnerText" 
    const novaInput = document.createElement('input');
    ul.appendChild(novaLi); 
    novaLi.appendChild(novaInput)
}

function criarElementoInnerHtml(){
    const ul = document.getElementById('listaElementos');
    const novaLi = document.createElement('li');

    console.log(`Adicionando novo elemento ao clicar`)

    novaLi.innerHTML = '<input type="text" placeholder="Digite seu nome: ">';
    ul.appendChild(novaLi);
}

function criarElementoTextContent(){
    const ul = document.getElementById('listaElementos');
    const novaLi = document.createElement('li');

    console.log(`Adicionando novo elemento ao clicar`)

    novaLi.textContent = 'Não Torra!'
    ul.appendChild(novaLi);
}

