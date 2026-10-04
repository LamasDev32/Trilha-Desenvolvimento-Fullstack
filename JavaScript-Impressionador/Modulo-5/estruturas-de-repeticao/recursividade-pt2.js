const carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: 2024,
};

// Função recursiva para imprimir propriedades de um objeto simples
function imprimirObjeto(objeto) {
    const keys = Object.keys(objeto); // lista [marca, modelo, ano]

    // Caso base -  se o objeto estiver vazio
    if (keys.length === 0) {
        return; // Encerrar a função caso não haja valor a retornar
    }

    // Iteração sobre as chaves do objeto
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = objeto[key];

        if (typeof value === "object") {
            // se for objeto, chama recursivamente a função
            imprimirObjeto(value);
        } else {
            // se não for objeto, imprimi chave e seu valor
            console.log(`${key}:${value}`);
        }
    }
}

// chamada da função
imprimirObjeto(carro);
