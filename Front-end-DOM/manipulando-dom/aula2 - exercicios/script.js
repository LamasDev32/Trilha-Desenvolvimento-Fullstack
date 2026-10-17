mudarCor = (elemento) => {
    elemento.style.color = 'red';
}

voltarCor = (elemento) => {
    elemento.style.color = 'black';
}

alerta = () => {
    alert('Você clicou no botão!');
}

foco = (elemento) => {
    elemento.placeholder = "Campo em foco";
}

desfoco = (elemento) => {
    elemento.placeholder = '';
}

alterando = (elemento) => {
    elemento.style.transition = "all 1s";
    elemento.src = "imagem2.png";
}

voltando = (elemento) => {
    elemento.style.transition = "all 1s";
    elemento.src = "imagem1.png";
}