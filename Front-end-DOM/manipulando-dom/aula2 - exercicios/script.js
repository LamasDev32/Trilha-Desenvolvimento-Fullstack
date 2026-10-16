function passando() {
    document.getElementById('texto').style.color = 'blue';
}

function saindo() {
    document.getElementById('texto').style.color = '#333';
}

function alerta() {
    alert("Botão clicado!");
}

function foco() {
    document.getElementById('input').placeholder = "Campo em foco";
}

function desfoco() {
    document.getElementById('input').placeholder = " ";
}

function alterando() {
    document.getElementById('imagem').style.transition = "all 1s";
    document.getElementById('imagem').src = "imagem2.png";
}

function voltando() {
    document.getElementById('imagem').style.transition = "all 1s";
    document.getElementById('imagem').src = "imagem1.png";
}