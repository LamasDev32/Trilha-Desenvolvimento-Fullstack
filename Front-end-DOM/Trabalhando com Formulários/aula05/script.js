// Todo o código vai aqui dentro - Espera carregar o DOM da página antes de executar o JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Ouvindo o evento de envio
    const formulario = document.getElementById("meuFormulario");

    // Adiciona um "escutador" para o evento submit, que é disparado quando o formulário é enviado.
    formulario.addEventListener("submit", (e) => {
        resetarMensagensErro();

        const camposValidos = validarCamposObrigatorios();
        const senhasValidas = compararValores();

        // Impede o envio se houver algum erro
        if (!camposValidos || !senhasValidas) {
            e.preventDefault();
        }
    });

    // Função responsável por validar os campos obrigatórios
    function validarCamposObrigatorios() {
        const camposObrigatorios = document.querySelectorAll(".obrigatorio");
        let camposValidos = true;

        // Laço que percorre todos os campos com a classe obrigatório
        for (let i = 0; i < camposObrigatorios.length; i++) {
            const campo = camposObrigatorios[i];

            // trim() remove espaços em branco das pontas
            if (campo.value.trim() === "") {
                exibirErro(campo, "Este campo é obrigatório");
                camposValidos = false;
            }
        }
        return camposValidos;
    }

    // Função responsável por validar se as senhas coincidem
    function compararValores() {
        const senha = document.getElementById("senha");
        const confirmarSenha = document.getElementById("confirmarSenha");

        // Se algum dos campos estiver vazio, a validação de obrigatório já trata disso
        if (senha.value.trim() === "" || confirmarSenha.value.trim() === "") {
            return false;
        }

        // Compara os campos de senha e caso sejam de diferentes trata o erro informando que as senhas estão diferentes.
        if (senha.value !== confirmarSenha.value) {
            exibirErro(confirmarSenha, "As senhas não coincidem");
            return false;
        }
        return true;
    }

    // Função responsável por exibir mensagens de erro
    function exibirErro(elemento, mensagem) {
        const mensagemErro =
            elemento.parentElement.querySelector(".error-message");

        // Se houver mensagem de erro, exibe a mensagem e altera o estilo para visualização.
        if (mensagemErro) {
            mensagemErro.textContent = mensagem;
            mensagemErro.style.display = "inline-block";
        }
    }

    // Função responsável por resetar todas as mensagens de erro
    function resetarMensagensErro() {
        const mensagemErro = document.querySelectorAll(".error-message");

        // Percorre todos os elementos com a classe error-message e remove qualquer mensagem de erro existente.
        for (let i = 0; i < mensagemErro.length; i++) {
            mensagemErro[i].textContent = "";
            mensagemErro[i].style.display = "none";
        }
    }
});
