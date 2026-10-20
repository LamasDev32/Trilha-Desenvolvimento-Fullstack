function changeImage() {
    const img = document.getElementById("myImage");
    const currentSrc = img.getAttribute("src");

    if (currentSrc === "imagem1.png") {
        img.setAttribute("src", "imagem2.png");
        img.setAttribute("alt", "Professor Daniel");
    } else {
        img.setAttribute("src", "imagem1.png");
        img.setAttribute("alt", "Silhueta de uma pessoa");
    }
}

function changeType() {
    const input = document.getElementById("input");
    const currentType = input.getAttribute("type");

    switch(currentType) {
      case "text":
        input.setAttribute("type", "number");
        input.setAttribute("placeholder", "Informe sua idade: ");
        break;
      case "number":
        input.setAttribute("type", "radio");
        break;
      case "radio":
        input.setAttribute("type", "range");
        break;
      default:
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Informe seu nome: ")
    }
}