// Função para encontrar o maior número
const encontrarMaior = (a, b, c) => Math.max(a, b, c);

// Função para encontrar o menor número
const encontrarMenor = (a, b, c) => Math.min(a, b, c);

// Pedir ao usuário que insira os três números
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));
const num3 = Number(prompt("Digite o terceiro número:"));

// Usar as funções para encontrar o maior e o menor número
const maior = encontrarMaior(num1, num2, num3);
const menor = encontrarMenor(num1, num2, num3);

// Mostrar os resultados no console
console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);
