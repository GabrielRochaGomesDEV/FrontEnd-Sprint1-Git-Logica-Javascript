// Ler o vetor A

let A = [];
for (let i = 0; i < 5; i++) {
    let num = parseFloat(prompt(`Digite o número ${i + 1} para o vetor A:`));
    A.push(num);
}

// Ler o número X

let X = parseFloat(prompt("Digite um número X:"));

// Criar o vetor M e armazenar os resultados

let M = A.map(a => a * X);

// Imprimir o vetor M

console.log("O vetor M é:", M);
