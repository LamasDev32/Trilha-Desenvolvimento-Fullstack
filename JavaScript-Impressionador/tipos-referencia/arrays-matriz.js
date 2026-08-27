/* 

Em JavaScript, os tipos de referência incluem objetos, arrays e funções.

Diferente dos tipos primitivos (como números, strings e booleanos), 
os tipos de referência são armazenados e manipulados de maneira diferente.

*/
let frutas = ["banana", "maçã", "goiba"];

for (i = 0; i < frutas.length; i++) {
    console.log(i);
    console.log(frutas[i]);
}

frutas.push("manga"); // Adicionando elemento no fim da lista.
console.log(frutas);

// Array
let lista = ["Monitor", "Teclado", "Mouse"];

console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);

lista[0] = "WebCam";
console.log(lista);

lista[4] = "Monitor";
console.log(lista);

console.log(lista.length);

// lista.length = lista.length - 2; // 5
// console.log(lista);

let matrizVendas = [
    [100, 200, 300],
    [400, 500, 50], //loja B
    [700, 400, 450],
];

console.log(matrizVendas);
console.log(matrizVendas[1]);
matrizVendas[1][2] = 500;
console.log(matrizVendas[1]);

let resultadoLojaB =
    matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];
console.log(resultadoLojaB);
