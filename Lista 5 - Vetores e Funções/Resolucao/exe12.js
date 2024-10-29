function encontrarMaiorElemento(vetor) {
    if (vetor.length === 0) {
        return null; // Retorna null se o vetor estiver vazio
    }

    let maior = vetor[0];
    let contagem = 1;

    // Percorre o vetor para encontrar o maior elemento e sua contagem

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
            contagem = 1; // Reseta a contagem para o novo maior
        } else if (vetor[i] === maior) {
            contagem++; // Incrementa a contagem se for igual ao maior
        }
    }

    return { maior, contagem }; // Retorna um objeto com o maior elemento e sua contagem
}

// Exemplo de uso da função

const vetor = [3, 5, 7, 7, 2, 5, 7, 1];
const resultado = encontrarMaiorElemento(vetor);

console.log(`Maior elemento: ${resultado.maior}`); // Saída: Maior elemento: 7
console.log(`Número de vezes que apareceu: ${resultado.contagem}`); // Saída: Número de vezes que apareceu: 4
