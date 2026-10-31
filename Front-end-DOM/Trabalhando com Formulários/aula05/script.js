document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("myForm");

    formulario.addEventListener("submit", function (event) {
        //Resetando mensgens erro
        resetarMensagensDeErro();

        if (!validarCamposObrigatorios()) {
            event.preventDefault(); // impede a submissão do formulário se houver erros!
        }

        if (!compararValores()) {
            event.preventDefault();
        }
    });

    function validarCamposObrigatorios() {
        let camposObrigatorios = document.querySelectorAll(".obg");
        // console.log(camposObrigatorios);
        let camposValidos = true;

        for (let i = 0; camposObrigatorios.length > i; i++) {
            let campo = camposObrigatorios[i];

            if (campo.value === "" || campo.value === null) {
                exibirErro(campo, "Este campo é obrigatório");
                camposValidos = false;
            }
        }
        return camposValidos;
    }

    function compararValores() {
        const senha = document.getElementById("password");
        const confirmarSenha = document.getElementById("confirmPassword");

        if (senha.value !== confirmarSenha.value) {
            exibirErro(confirmarSenha, "As senhas não coincidem.");
            return false;
        }
        return true;
    }

    function exibirErro(elemento, mensagem) {
        let mensagemErro =
            elemento.parentElement.querySelector(".error-message");
        mensagemErro.textContent = mensagem;
        mensagemErro.style.display = "inline-block"; // exibir a mensagem de erro
    }

    function resetarMensagensDeErro() {
        let mensagensErro = document.querySelectorAll(".error-message");
        //console.log(mensagensErro);

        for (let i = 0; i < mensagensErro.length; i++) {
            mensagensErro[i].textContent = "";
        }
    }
});
