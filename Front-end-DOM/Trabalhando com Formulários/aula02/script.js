//Evento de Submit
document.addEventListener("DOMContentLoaded", () => {
    let formulario = document.getElementById("myForm");

    formulario.addEventListener("submit", () => {
        alert("Enviado com sucesso!");
    });
});

//Evento de change
let campoTexto = document.getElementById("campoTexto");
campoTexto.addEventListener("change", () => {
    console.log(`Campo de Texto foi alterado, ${campoTexto.value}`);
});

//Evento de Focus
campoTexto.addEventListener("focus", () => {
    console.log("Campo de Texto em Foco!");
});

//Evento de Blur
campoTexto.addEventListener("blur", () => {
    console.log("Campo de texto Desfocado!");
});
