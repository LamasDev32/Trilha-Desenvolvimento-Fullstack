document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("myForm");

    formulario.addEventListener("submit", function (event) {
        const camposValidos = validarCamposObrigatorios();
        const senhasIguais = compararValores();

        // Se alguma das validações falhar, impede o envio
        if (!camposValidos || !senhasIguais) {
            event.preventDefault();
        }
    });

    function validarCamposObrigatorios() {
        
        const camposObrigatorios = document.querySelectorAll(".obg");
        let camposValidos = true;

        camposObrigatorios.forEach(campo => {
            // Verifica se o valor está vazio (incluindo espaços em branco)
            if (!campo.value.trim()) {
                console.log("Este campo é obrigatório:", campo.id || campo.name);
                camposValidos = false;
            }
        });

        return camposValidos;
    }

    function compararValores() {
        const senha = document.getElementById('password');
        const confirmarSenha = document.getElementById('confirmPassword');

        // Garante que os elementos existem antes de ler a propriedade .value
        if (!senha || !confirmarSenha) {
            return true; 
        }

        if (senha.value !== confirmarSenha.value) {
            console.log("As senhas não são iguais!");
            return false;
        }

        return true; // Correção: A função precisa retornar true caso estejam iguais
    }
});