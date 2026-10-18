function criarElemento() {
    const ul = document.getElementById('listaElementos');
    const novaLi = document.createElement('li');

    const novaInput = document.createElement('input');

    ul.appendChild(novaLi); 
    novaLi.appendChild(novaInput)
}










