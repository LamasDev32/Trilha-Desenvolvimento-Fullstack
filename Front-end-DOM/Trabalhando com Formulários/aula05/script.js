document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", (event) => {
    // Resetando mensagens de erro anteriores
    resetarMensagensDeErro();

    const camposValidos = validarCamposObrigatorios();
    const senhasValidas = compararValores();

    // Impede o envio se houver algum erro
    if (!camposValidos || !senhasValidas) {
      event.preventDefault();
    }
  });

  function validarCamposObrigatorios() {
    const camposObrigatorios = document.querySelectorAll(".obrigatorio");
    let camposValidos = true;

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

  function compararValores() {
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    // Se algum dos campos estiver vazio, a validação de obrigatório já trata disso
    if (senha.value.trim() === "" || confirmarSenha.value.trim() === "") {
      return false;
    }

    if (senha.value !== confirmarSenha.value) {
      exibirErro(confirmarSenha, "As senhas não coincidem.");
      return false;
    }
    return true;
  }

  function exibirErro(elemento, mensagem) {
    const mensagemErro = elemento.parentElement.querySelector(".error-message");
    if (mensagemErro) {
      mensagemErro.textContent = mensagem;
      mensagemErro.style.display = "inline-block"; // exibe a mensagem de erro
    }
  }

  function resetarMensagensDeErro() {
    const mensagensErro = document.querySelectorAll(".error-message");

    for (let i = 0; i < mensagensErro.length; i++) {
      mensagensErro[i].textContent = "";
      mensagensErro[i].style.display = "none"; // oculta o elemento de erro novamente
    }
  }
});
