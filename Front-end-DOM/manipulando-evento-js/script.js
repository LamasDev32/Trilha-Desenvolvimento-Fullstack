function clicouBotao() {
    console.log("Clicou botão");
}

let botao = document.getElementById("meuBotao");
botao.addEventListener("click", clicouBotao);

setTimeout(() => {
    botao.removeEventListener("click", clicouBotao);
    console.log("Manipulador de evento foi removido após 5 segundos");
}, 5000);
