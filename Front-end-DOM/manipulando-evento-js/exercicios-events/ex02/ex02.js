const btn = document.getElementById("btn");
const limiteClique = 5;

let count = 0;

function handleClick() {
    count++;
    console.log(`Clique número: ${count}`);

    if (count >= limiteClique) {
        console.log("Limite atingido! Removendo o Event Listener.");

        btn.removeEventListener("click", handleClick);

        btn.textContent = "Limite Atingido!";
        btn.disabled = true;
    }
}

btn.addEventListener('click', handleClick);