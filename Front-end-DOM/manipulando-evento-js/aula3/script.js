const link = document.getElementById("anchor");

link.addEventListener("click", function (event) {
    event.preventDefault();

    console.log("O comportamento padrão foi alterado");

    window.location.href = "https://facebook.com";
});
