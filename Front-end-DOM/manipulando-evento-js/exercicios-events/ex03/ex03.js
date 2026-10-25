const form = document.getElementById('myForm');

function handleSubmit(e) {
    e.preventDefault();

    console.log("Formulário não foi enviada devido a prevenção do comportamento padrão!");
}

form.addEventListener('submit', handleSubmit);

const input = form.querySelector('input#password');

input.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        e.preventDefault();
        console.log('Pressionar o Enter não envia o formulário!');
    }
})
