// Vetor V 
let V = [5, 1, 4, 2, 7, 8, 3, 6];

// Vetor V1 vazio para armazenar os valores dobrados
let V1 = [];

// Loop para calcular o dobro de cada valor de V e armazenar em V2
for (let i = 0; i < V.length; i++) {
    V1[i] = V[i] * 2; // Dobra o valor de V e armazena em V2
}

// Exibe os resultados no console
console.log("Vetor V:", V);
console.log("Vetor V2:", V1);
