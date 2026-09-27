function calcularFatorialRecursivo(n) {
    // Validação para números negativos
    if (n < 0) {
        return "Erro: O número deve ser maior ou igual a zero.";
    }

    // Caso base: a recursão para quando n é 0 ou 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Passo recursivo: n * (n - 1)!
    return n * calcularFatorialRecursivo(n - 1);
}

// Exemplos de uso:
console.log(calcularFatorialRecursivo(5)); // Retorna 120
console.log(calcularFatorialRecursivo(0)); // Retorna 1

function recursividade(string) {
    if (string === "") {
        return 0;
    }
    return 1 + recursividade(string.substring(1));
}

console.log(recursividade('Felipe Lamas'))



