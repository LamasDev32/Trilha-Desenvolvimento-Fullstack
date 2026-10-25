const button = document.getElementById("myButton");

button.addEventListener("click", (e) => {
    console.log("Manipulador de evento 1 adicionado com addEventListener");
});

button.addEventListener("click", (e) => {
    console.log("Manipulador de evento 2 adicionado com addEventListener");
});

/* O problema do onclick (e de outras propriedades on*) é que ele armazena apenas uma única referência de função. Se você atribuir outra função, a anterior é apagada (subscrita).
*/

button.onclick = (e) => {
    console.log("Manipulador de evento 1 adicionado com onclick");
};

button.onclick = (e) => {
    console.log("Manipulador de evento 2 adicionado com onclick");
};
