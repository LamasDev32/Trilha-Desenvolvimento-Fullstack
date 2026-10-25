let meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
    meuElemento.classList.add("circle");
    meuElemento.classList.remove("square");
}

function tornarQuadrado() {
    meuElemento.classList.remove("circle");
    meuElemento.classList.add("square");
}

/* function alternarFormato() {
    if(div.className === 'square'){
        return tornarCirculo()
    } else {
        return tornarQuadrado()
    }
} */

function alternarFormato() {
    meuElemento.classList.toggle("circle");
    meuElemento.classList.toggle("square");
}

function verificarClasse() {
    if (meuElemento.classList.contains("circle")) {
        alert("O elemento possui a classe circle");
    } else {
        alert("O elemento possui a classe square");
    }
}