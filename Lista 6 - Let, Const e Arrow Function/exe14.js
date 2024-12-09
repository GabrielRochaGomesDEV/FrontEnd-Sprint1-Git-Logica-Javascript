// Função para somar uma quantidade indeterminada de números
const somar = (...numeros) => {
    // Usar o método reduce para somar todos os números passados
    const somaTotal = numeros.reduce((acumulador, numeroAtual) => {
      return acumulador + numeroAtual;  // Soma o número atual ao total acumulado
    }, 0);  // Começa a soma com 0
  
    // Retorna o resultado final da soma
    return somaTotal;
  };
  
  // Testando a função com diferentes quantidades de números
  console.log(somar(3, 5, 6));  // Isso vai retornar 14
  console.log(somar(2, 5));     // Isso vai retornar 7
  console.log(somar(1, 1, 1, 1));  // Isso vai retornar 4
  console.log(somar(10));      // Isso vai retornar 10
  