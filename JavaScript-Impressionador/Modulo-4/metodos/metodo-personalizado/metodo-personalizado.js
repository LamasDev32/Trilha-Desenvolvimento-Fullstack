/* 

Métodos personalizados em objetos JavaScript

Neste exemplo, criamos um objeto chamado "calculadora" que possui propriedades para armazenar dois valores (valor1 e valor2) e métodos para realizar operações matemáticas básicas, como soma, subtração, multiplicação e divisão. Além disso, adicionamos um método personalizado chamado "exponenciacao" que calcula a exponenciação dos dois valores.

Utilizamos o this para acessar as propriedades do objeto dentro dos métodos, permitindo que os valores definidos sejam utilizados nas operações matemáticas.

*/

const calculadora = { // Objeto calculadora
    valor1: 0,
    valor2: 0,

    definirValores: function (v1, v2) {
        this.valor1 = v1; // Define o valor1 do objeto calculadora 
        this.valor2 = v2; // Define o valor2 do objeto calculadora
    },

    somar: function () { 
        return this.valor1 + this.valor2; // Retorna a soma dos valores definidos no objeto calculadora
    },
    subtrair: function () { 
        return this.valor1 - this.valor2; // Retorna a subtração dos valores definidos no objeto calculadora
    },
    multiplicar: function () { 
        return this.valor1 * this.valor2; // Retorna a multiplicação dos valores definidos no objeto calculadora
    },
    dividir: function () { 
        return this.valor1 / this.valor2; // Retorna a divisão dos valores definidos no objeto calculadora
    },
}

//Exemplo de uso
calculadora.definirValores(5, 20); // Define os valores 5 e 20 para a calculadora
console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());

calculadora.exponenciacao = function () { // Adiciona um método personalizado ao objeto calculadora
    return this.valor1 ** this.valor2;
};

console.log(calculadora.exponenciacao());
