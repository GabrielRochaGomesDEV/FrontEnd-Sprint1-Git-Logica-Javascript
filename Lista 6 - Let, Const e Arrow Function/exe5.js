// Declarar o vetor A com 10 números
const A = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Declarar a variável X
const X = 5; // Substitua 5 pelo valor desejado

// Criar o vetor M em uma única linha
const M = A.map(num => num * X);

// Exibir o vetor M
console.log(`O vetor M é: [${M.join(', ')}]`);
