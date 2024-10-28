// Função para somar três números

function somarTresNumeros(a, b, c) {
    return a + b + c;
}

// Função para calcular a média

function calcularMedia(a, b, c) {
    const soma = somarTresNumeros(a, b, c);
    return soma / 3;
}

// Função principal para executar o programa

function executarPrograma() {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
    const numero3 = parseFloat(prompt("Digite o terceiro número:"));

    // Calcular soma e média

    const soma = somarTresNumeros(numero1, numero2, numero3);
    const media = calcularMedia(numero1, numero2, numero3);

    // Exibir resultados no console
    
    console.log(`A soma dos números é: ${soma}`);
    console.log(`A média dos números é: ${media}`);
}

// Chamar a função principal para executar o programa
executarPrograma();
