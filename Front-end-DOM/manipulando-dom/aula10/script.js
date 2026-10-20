const list = document.getElementById('list');

function adicionarItem() {
    const novaLI = document.createElement('li');
    list.appendChild(novaLI).innerHTML = "Novo Item";
}

function removerItem() {
    const ultimoItem = list.lastElementChild;

    list.removeChild(ultimoItem);
}