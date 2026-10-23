const div = document.getElementById("meuElemento");

function tornarCirculo() {
    meuElemento.classList.add("circle");
    meuElemento.classList.remove("square");
}

function tornarQuadrado() {
    meuElemento.classList.remove('circle');
    meuElemento.classList.add('square');
}

/* function alternarFormato() {
    if(div.className === 'square'){
        return tornarCirculo()
    } else {
        return tornarQuadrado()
    }
} */

    function alternarFormato() {
        meuElemento.classList.toggle('circle');
        meuElemento.classList.toggle('square');
    }

    function verificarClasse() {
        meuElemento.classList.content('circle');
        alert(meuElemento);
    }