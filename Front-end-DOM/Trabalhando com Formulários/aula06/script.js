document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("meuFormulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let dados = new FormData(formulario);

        // Itera sobre os dados do formulário e exibe no console
        for (let [chave, valor] of dados.entries()) {
            console.log(`${chave} : ${valor}`);
        }
    });
});
