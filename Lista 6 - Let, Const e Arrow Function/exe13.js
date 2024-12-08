// Função para inverter um número
const inverterNumero = (numero) => {
    // Primeiramente, transformamos o número em uma sequência de caracteres (string)
    const numeroComoString = numero.toString();
  
    // Depois, "quebramos" a string em caracteres individuais, invertêmos a ordem e juntamos de volta
    const numeroInvertido = numeroComoString.split('').reverse().join('');
  
    // Finalmente, transformamos a string invertida de volta para número
    return parseInt(numeroInvertido); 
  };
  
  // Testando a função com alguns números
  console.log(inverterNumero(12345));  // Vai retornar 54321
  console.log(inverterNumero(9876));   // Vai retornar 6789
  console.log(inverterNumero(1001));   // Vai retornar 1001
  console.log(inverterNumero(1));      // Vai retornar 1
  