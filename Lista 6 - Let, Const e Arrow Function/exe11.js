// Função para verificar se uma string é um palíndromo
const verificarPalindromo = (texto) => {
    // Limpa o texto: remove espaços e converte para minúsculas
    const textoLimpo = texto.split(' ').join('').toLowerCase();
  
    // Inverte o texto
    const textoInvertido = textoLimpo.split('').reverse().join('');
  
    // Compara o texto limpo com o texto invertido
    return textoLimpo === textoInvertido ? "É um palíndromo" : "Não é um palíndromo";
  };
  
  // Teste da função
  console.log(verificarPalindromo("A man a plan a canal Panama"));  // "É um palíndromo"
  console.log(verificarPalindromo("Olá mundo"));                   // "Não é um palíndromo"
  