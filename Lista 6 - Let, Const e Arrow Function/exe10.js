// Função para identificar o maior número
const maiorNumero = (a, b, c) => {
    return Math.max(a, b, c);
  };
  
  // Função para identificar o menor número
  const menorNumero = (a, b, c) => {
    return Math.min(a, b, c);
  };
  
  // Recebe os três números do usuário
  const numero1 = parseFloat(prompt("Digite o primeiro número:"));
  const numero2 = parseFloat(prompt("Digite o segundo número:"));
  const numero3 = parseFloat(prompt("Digite o terceiro número:"));
  
  // Identificar o maior e o menor número
  const maior = maiorNumero(numero1, numero2, numero3);
  const menor = menorNumero(numero1, numero2, numero3);
  
  // Exibe os resultados no console de forma mais amigável
  console.log(`Você digitou os números: ${numero1}, ${numero2} e ${numero3}.`);
  console.log(`O maior número entre eles é: ${maior}.`);
  console.log(`E o menor número é: ${menor}.`);
  