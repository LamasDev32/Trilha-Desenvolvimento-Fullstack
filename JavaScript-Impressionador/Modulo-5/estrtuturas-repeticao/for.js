/* Lista de funcionários de um zoológico */
let funcionarios = [
    {
        nome: "João",
        categoria: "Veterinário",
        salario: 3500,
        disponibilidade: true,
    },
    {
        nome: "Gabriela",
        categoria: "Administrativo",
        salario: 1500,
        disponibilidade: true,
    },
    {
        nome: "Ricardo",
        categoria: "Tratador",
        salario: 2800,
        disponibilidade: false,
    },
    {
        nome: "Felipe",
        categoria: "Desenvolvedor",
        salario: 4500,
        disponibilidade: true,
    }
];

// Listar funcionários por categoria
function listarFuncionariosPorCategoria(categoria) {
    console.log(`Funcionários na categoria ${categoria}:`);
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].categoria === categoria) {
            console.log(
                `Nome: ${funcionarios[i].nome}`,
            );
        }
    }
}

listarFuncionariosPorCategoria("Administrativo");

// Calcular total gasto em salários

function calcularSalarioTotal() {
    let total = 0;
    for (let i = 0; i < funcionarios.length; i++) {
        total += funcionarios[i].salario;
    }
    console.log(`Total gasto em salários: R$ ${total.toFixed(2)}`);
}

calcularSalarioTotal();

// Função contar funcionários que estão disponíveis
function contarFuncionariosDisponiveis() {
    let count = 0;
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].disponibilidade) {
            count++;
        }
    }
    console.log(`Número de funcionários disponíveis: ${count}`);
}

contarFuncionariosDisponiveis();

for(let i = 0;;) {
    console.log('Executando infinitamente...');
    i++;
    if(i > 10) { 
        break;
    }
}

let index = 0;
let produtos = ['Notebook', 'Smartphone', 'Tablet', 'Monitor', 'Teclado'];

for(;index < produtos.length; ) {
    console.log(`Produtos [${index + 1}]: ${produtos[index]}`);
    index++;
} 