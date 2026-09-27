/* 

Exercício 4: Classificação de Desempenho de Vendas
Você está gerenciando uma equipe de vendedores e deseja avaliar o desempenho de cada vendedor com
base em suas vendas mensais em relação a uma meta estabelecida. Escreva um programa
desempenhoIndividualDeVendas que determine a categoria de desempenho de um vendedor com base no
percentual alcançado em relação à meta. As categorias incluem "Excelente Desempenho" (para vendedores
que alcançaram ou excederam a meta), "Muito Bom Desempenho" (para vendedores com vendas entre 90% e
99% da meta), "Bom Desempenho" (para vendedores com vendas entre 80% e 89% da meta), "Desempenho
Satisfatório" (para vendedores com vendas entre 61% e 79% da meta) e "Desempenho Insatisfatório" (para
vendedores com vendas abaixo de 60% da meta). Execute o código e informe a categoria de desempenho do
vendedor com base nas vendas mensais e na meta de vendas estabelecida.

*/

function desempenhoIndividualDeVendas(vendasRealizadas, metaVendas) {
    // 1. Calcula o percentual de vendas atingido em relação à meta
    const percentualAtingido = (vendasRealizadas / metaVendas) * 100;

    // 2. Determina a categoria de desempenho com base no percentual
    let categoria = "";

    if (percentualAtingido >= 100) {
        categoria = "Excelente Desempenho";
    } else if (percentualAtingido >= 90) {
        categoria = "Muito Bom Desempenho";
    } else if (percentualAtingido >= 80) {
        categoria = "Bom Desempenho";
    } else if (percentualAtingido >= 61) {
        categoria = "Desempenho Satisfatório";
    } else {
        categoria = "Desempenho Insatisfatório";
    }

    // 3. Exibe o resultado no console
    console.log(`Vendas: R$ ${vendasRealizadas} | Meta: R$ ${metaVendas}`);
    console.log(`Percentual atingido: ${percentualAtingido.toFixed(2)}%`);
    console.log(`Categoria: ${categoria}`);

    return categoria;
}

// === Execução do programa (Exemplo) ===
const vendasDoVendedor = 1500;
const metaEstabelecida = 10000;

desempenhoIndividualDeVendas(vendasDoVendedor, metaEstabelecida);
