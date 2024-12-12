const V = [1, 4, 7, 1, 2, 1, 4, 25, 3, 7];

// Utilizei o reduce para somar todos os elementos
const soma = V.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

// Calculei a média
const media = soma / V.length;

console.log(media); // Saída: 6
