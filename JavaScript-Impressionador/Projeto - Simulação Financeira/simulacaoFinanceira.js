// ==========================================
// Requisito 3: Obtenção do Mês Atual
// ==========================================
function obterMesAtual() {
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];
    const dataAtual = new Date();
    return meses[dataAtual.getMonth()];
}

// ==========================================
// Requisito 1: Simulação de Investimento
// ==========================================
function simularInvestimento(valorInicial, taxaMensal, meses) {
    let saldo = valorInicial;
    for (let i = 0; i < meses; i++) {
        saldo += saldo * taxaMensal;
    }
    return Number(saldo.toFixed(2));
}

// ==========================================
// Requisito 2: Gerenciamento de Despesas
// ==========================================
function gerenciarDespesas(despesasObj) {
    let total = 0;
    for (let categoria in despesasObj) {
        total += despesasObj[categoria];
    }
    return Number(total.toFixed(2));
}

// ==========================================
// Requisito 5: Estrutura de Dados para Despesas
// ==========================================
const despesasMensais = {
    alimentacao: 1200.0,
    transporte: 450.0,
    aluguel: 1500.0,
    lazer: 350.0,
};

// ==========================================
// Requisito 6: Entradas e Configurações do Investimento
// ==========================================
const valorInicialInvestimento = 5000.0;
const taxaMensalRendimento = 0.01; // 1% ao mês
const duracaoMeses = 12;
const metaInvestimento = 6000.0;
const metaOrcamentoMensal = 3600.0;

// ==========================================
// Requisito 4: Geração de Relatório Financeiro
// ==========================================
function gerarRelatorio(valorInicial, taxaMensal, duracao, despesas, metaInv, metaOrc) {
    const mesAtual = obterMesAtual();
    const saldoFinal = simularInvestimento(valorInicial, taxaMensal, duracao);
    const totalDespesas = gerenciarDespesas(despesas);

    // Verificação de economia ou excedente
    let mensagemOrcamento = "";
    if (totalDespesas <= metaOrc) {
        const economia = metaOrc - totalDespesas;
        mensagemOrcamento = `Economia de R$ ${economia.toFixed(2)} em relação ao orçamento.`;
    } else {
        const excedente = totalDespesas - metaOrc;
        mensagemOrcamento = `Excedente de R$ ${excedente.toFixed(2)} acima do orçamento.`;
    }

    // Verificação da meta de investimento
    const metaAtingida = saldoFinal >= metaInv;
    const statusMeta = metaAtingida ? "Sim, a meta de investimento foi atingida!" : "Não, a meta de investimento ainda não foi atingida.";

    // Exibição do Relatório
    console.log("========================================");
    console.log("          RELATÓRIO FINANCEIRO          ");
    console.log("========================================");
    console.log(`Mês Atual: ${mesAtual}`);
    console.log(`Saldo Final do Investimento: R$ ${saldoFinal.toFixed(2)}`);
    console.log(`Total de Despesas: R$ ${totalDespesas.toFixed(2)}`);
    console.log(`Orçamento: ${mensagemOrcamento}`);
    console.log(`Meta de Investimento Atingida? ${statusMeta}`);
    console.log("----------------------------------------");
    console.log("Resumo das Despesas por Categoria:");
    for (let categoria in despesas) {
        const nomeFormatado = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        console.log(`- ${nomeFormatado}: R$ ${despesas[categoria].toFixed(2)}`);
    }
    console.log("========================================");
}

// ==========================================
// Requisito 7: Execução do Relatório
// ==========================================
gerarRelatorio(valorInicialInvestimento, taxaMensalRendimento, duracaoMeses, despesasMensais, metaInvestimento, metaOrcamentoMensal);
