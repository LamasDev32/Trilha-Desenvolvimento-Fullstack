let livro = {
    titulo: "Javascript para iniciantes",
    autor: "João Silva",
    ano: 2021,
    genero: "Programação",
};

console.log(livro.titulo);

livro.paginas = 300;
// console.log(livro);

livro["idioma"] = "Português";
// console.log(livro);

delete livro.idioma;
// console.log(livro);

console.log("autor" in livro); // true
console.log("idioma" in livro); // false

console.log(livro)