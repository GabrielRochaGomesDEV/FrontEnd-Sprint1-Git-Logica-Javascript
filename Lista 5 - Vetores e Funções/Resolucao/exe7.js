// Função para ler e ordenar números

function ordenarNumeros() {
    const numeros = []; // Vetor para armazenar os números

    // Ler 5 números do usuário

    for (let i = 0; i < 5; i++) {
        const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        numeros.push(numero);
    }

    // Ordenar o vetor em ordem crescente

    numeros.sort((a, b) => a - b);

    // Exibir o vetor ordenado no console

    console.log("Números em ordem crescente:", numeros);
}

// Chamar a função para executar o processo

ordenarNumeros();
