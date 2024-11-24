// Função para ler valores do usuário
function lerValor(mensagem) {
    const valor = parseFloat(prompt(mensagem));
    return valor;
}

// Algoritmo principal
function realizarDivisao() {
    let valor1 = lerValor("Digite o primeiro valor:");
    let valor2;

    do {
        valor2 = lerValor("Digite o segundo valor (não pode ser zero):");
    } while (valor2 === 0); // Enquanto o segundo valor for zero, repete a leitura

    let resultado = valor1 / valor2;

    // resultado utilizando interpolação
    console.log(`O resultado da divisão de ${valor1} por ${valor2} é: ${resultado}`);
}

// Chama a função para realizar a divisão
realizarDivisao();
