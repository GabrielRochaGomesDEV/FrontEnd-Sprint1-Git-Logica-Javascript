// Função para determinar o perfil do investidor
function determinarPerfil(respostas) {
    let percentual = {
        ultraconservador: 0,
        conservador: 0,
        dinamico: 0,
        arrojado: 0
    };

    // Analisando as respostas para determinar o perfil
    percentual.ultraconservador += respostas[0] === 5 ? 75 : 0;
    percentual.conservador += respostas[0] === 5 ? 25 : 0;
    percentual.conservador += respostas[0] === 4 ? 64 : 0;
    percentual.dinamico += respostas[0] === 4 ? 36 : 0;
    percentual.dinamico += respostas[0] === 1 ? 90 : 0;
    percentual.conservador += respostas[0] === 1 ? 10 : 0;
    percentual.dinamico += respostas[0] === 2 ? 35 : 0;
    percentual.arrojado += respostas[0] === 2 ? 65 : 0;
    percentual.dinamico += respostas[0] === 3 ? 77 : 0;
    percentual.arrojado += respostas[0] === 3 ? 23 : 0;
    percentual.dinamico += respostas[1] === 2 ? 40 : 0;
    percentual.arrojado += respostas[1] === 2 ? 60 : 0;
    percentual.ultraconservador += respostas[1] === 1 ? 60 : 0;
    percentual.conservador += respostas[1] === 1 ? 40 : 0;
    percentual.conservador += respostas[1] === 4 ? 73 : 0;
    percentual.dinamico += respostas[1] === 4 ? 27 : 0;
    percentual.ultraconservador += respostas[1] === 5 ? 60 : 0;
    percentual.conservador += respostas[1] === 5 ? 40 : 0;

    let perfil = Object.keys(percentual).reduce((a, b) => percentual[a] > percentual[b] ? a : b);
    return perfil.charAt(0).toUpperCase() + perfil.slice(1);
}

// Função para calcular o lucro em investimento
function calcularLucro(capital, taxa, tempo, tipo) {
    let lucro = {
        simples: 0,
        composto: 0
    };

    if (tipo === "Renda fixa") {
        lucro.simples = capital * (taxa / 100) * tempo;
        lucro.composto = capital * Math.pow((1 + taxa / 100), tempo) - capital;
    } else {
        return "Renda variável não aplica cálculo de juros simples ou compostos.";
    }

    return lucro;
}

// Função para simular o investimento e redirecionar para a página de resultados
function simularInvestimento() {
    // Pegando os dados do formulário da página index.html
    const nome = document.getElementById("nome").value;
    const sexo = document.getElementById("sexo").value;
    const idade = parseInt(document.getElementById("idade").value);
    const renda = parseFloat(document.getElementById("renda").value).toFixed(2);

    let respostas = [];
    respostas.push(parseInt(document.getElementById("pergunta1").value));
    respostas.push(parseInt(document.getElementById("pergunta2").value));

    const perfil = determinarPerfil(respostas);

    let sugestao;
    let resultadoHTML = `
        <h2>Resultados da Simulação</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Sexo:</strong> ${sexo}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Renda Mensal:</strong> R$${renda}</p>
        <p><strong>Perfil do Investidor:</strong> ${perfil}</p>`;

    // Caso o perfil seja mais conservador, sugerir investimentos de renda fixa
    if (perfil === "Ultraconservador" || perfil === "Conservador") {
        sugestao = "Renda fixa";
        const capital = parseFloat(prompt("Qual é o valor que você deseja investir (R$):"));
        const taxa = parseFloat(prompt("Digite a taxa de juros anual, podem variar de 6% a 12% ao ano (%):"));
        const tempo = parseInt(prompt("Digite o tempo de investimento (em anos):"));

        const lucro = calcularLucro(capital, taxa, tempo, sugestao);
        resultadoHTML += `<p><strong>Sugestão de investimento:</strong> ${sugestao}</p>
                          <p><strong>Com Juros Simples:</strong> R$${lucro.simples.toFixed(2)}</p>
                          <p><strong>Com Juros Compostos:</strong> R$${lucro.composto.toFixed(2)}</p>`;
    } else if (perfil === "Dinamico" || perfil === "Arrojado") {
        sugestao = "Renda variável";
        resultadoHTML += `<p><strong>Sugestão de investimento:</strong> Ações ou outros investimentos de risco.</p>`;
    }

    // Armazenando os dados na URL para exibição na página de resultados
    const resultado = {
        nome,
        sexo,
        idade,
        renda,
        perfil,
        sugestao,
        resultadoHTML
    };

    // Convertendo os dados para uma string JSON
    const resultadoJSON = encodeURIComponent(JSON.stringify(resultado));

    // Redirecionando para a página de resultados, passando os dados pela URL
    window.location.href = `result.html?data=${resultadoJSON}`;
}

// Função para exibir os resultados na página de resultados (result.html)
function exibirResultados() {
    const urlParams = new URLSearchParams(window.location.search);
    const resultadoJSON = urlParams.get('data');
    
    if (resultadoJSON) {
        const resultado = JSON.parse(decodeURIComponent(resultadoJSON));

        document.getElementById("resultado").innerHTML = resultado.resultadoHTML;
    }
}



// A maneira correta de adicionar eventos após o carregamento do DOM
window.onload = function() {
    const btnSimular = document.getElementById("btnSimular");
    if (btnSimular) {
        btnSimular.addEventListener("click", simularInvestimento);
    } else {
        console.error("Elemento com id 'btnSimular' não encontrado!");
    }
};



