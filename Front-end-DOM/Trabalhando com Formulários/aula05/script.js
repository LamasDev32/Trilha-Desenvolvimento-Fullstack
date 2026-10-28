document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("myForm");

    formulario.addEventListener("submit", function (event) {
        // 1. Evita que a página recarregue automaticamente
        event.preventDefault(); 

        // 2. Executa a validação e guarda o resultado (true ou false)
        let formularioEstaValido = validarCamposObrigatorios();

        // 3. Decide o que fazer com base na validação
        if (formularioEstaValido) {
            console.log("Formulário válido! Pode enviar.");
        } else {
            console.log("Existem campos obrigatórios vazios.");
        }
    });

    function validarCamposObrigatorios() {
        let camposObrigatorios = document.querySelectorAll(".obg");
        let camposValidos = true;

        for (let i = 0; i < camposObrigatorios.length; i++) {
            let campo = camposObrigatorios[i];

            // .trim() para evitar que espaços em branco passem
            if (campo.value.trim() === "" || campo.value === null) {
                console.log("Este campo é obrigatório:", campo);
                camposValidos = false;
            }
        }
        return camposValidos;
    }
});