function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIdade(idade) {
    if (idade < 12) {
        return "Infantil";
    } else if (idade >= 12 && idade <= 20) {
        return "Juvenil";
    } else if (idade >= 21 && idade <= 65) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

function classificarIMC(imc) {
    if (imc < 20) {
        return {
            risco: "Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.",
            recomendacao: "Inclua carboidratos simples em sua dieta, além de proteínas - indispensáveis para ganho de massa magra. Procure um profissional."
        };
    } else if (imc >= 20 && imc < 25) {
        return {
            risco: "Seu peso está ideal para suas referências.",
            recomendacao: "Mantenha uma dieta saudável e faça seus exames periódicos."
        };
    } else if (imc >= 25 && imc < 30) {
        return {
            risco: "Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.",
            recomendacao: "Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante."
        };
    } else if (imc >= 30 && imc < 36) {
        return {
            risco: "Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.",
            recomendacao: "Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino)."
        };
    } else {
        return {
            risco: "O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.",
            recomendacao: "Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino)."
        };
    }
}

function diagnosticoPreviamente() {
    const nome = prompt("Digite seu nome:");
    const sexo = prompt("Digite seu sexo (Masculino/Feminino):");
    const idade = parseInt(prompt("Digite sua idade:"), 10);
    const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.65):"));
    const peso = parseFloat(prompt("Digite seu peso em kg:"));

    const imc = calcularIMC(peso, altura);
    const categoria = classificarIdade(idade);
    const classificacao = classificarIMC(imc);

    console.log(`Nome: ${nome}`);
    console.log(`Sexo: ${sexo}`);
    console.log(`Idade: ${idade}`);
    console.log(`Altura: ${altura}`);
    console.log(`Peso: ${peso}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`IMC Desejável: entre 20 e 24`);
    console.log(`Resultado IMC: ${imc.toFixed(2)}`);
    console.log(`Risco: ${classificacao.risco}`);
    console.log(`Recomendação inicial: ${classificacao.recomendacao}`);
}

// Chamar a função para iniciar o diagnóstico
diagnosticoPreviamente();


/*Funções:

calcularIMC: Calcula o IMC com base no peso e altura.
classificarIdade: Classifica a idade em categorias (Infantil, Juvenil, Adulto, Idoso).
classificarIMC: Classifica o IMC e retorna os riscos e recomendações correspondentes.

Função Principal:

diagnosticoPreviamente: Coleta os dados do paciente (nome, sexo, idade, altura e peso), 
calcula o IMC, determina a categoria de idade, e exibe os resultados e recomendações no console.

Execução:

Para rodar o código, você pode copiá-lo em um arquivo HTML dentro de uma tag <script>, ou executá-lo diretamente no console do navegador.*/