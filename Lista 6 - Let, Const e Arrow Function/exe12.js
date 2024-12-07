// Função para verificar se um número é primo
const verificarSeNumeroEPrimo = (numero) => {
    // Se o número for menor que 2, sabemos que não é primo
    if (numero < 2) {
      return "Não é um número primo";
    }
  
    // verificar se o número pode ser dividido por algum número até a sua raiz quadrada
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Se o número for divisível por qualquer número entre 2 e sua raiz quadrada, ele não é primo
      if (numero % i === 0) {
        return "Não é um número primo";
      }
    }
  
    // Se o número não for divisível por nenhum número até sua raiz quadrada, então ele é primo
    return "É um número primo";
  };
  
  // Teste da função com alguns números
  console.log(verificarSeNumeroEPrimo(7));   // "É um número primo"
  console.log(verificarSeNumeroEPrimo(10));  // "Não é um número primo"
  console.log(verificarSeNumeroEPrimo(1));   // "Não é um número primo"
  console.log(verificarSeNumeroEPrimo(13));  // "É um número primo"
  