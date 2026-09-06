//split(delimiter[, limit]);

let texto = "maçã,banana,laranja,uvas";
// let frutas = texto.split(","); //delimitador ,
//let frutasLimite = texto.split(",", 4) // delimitador + limite de elementos da nossa lista
// let frutas0 = texto.split();
// console.log(frutas0);

let frutas = texto.split(/\s+/); // Essa expressão regular vai dividir a string em cada espaço em branco, incluindo espaços, tabs e quebras de linha

console.log(frutas);

//splice
frutas.splice(1, 2); // remove 2 elementos a partir do índice 1
console.log(frutas);
