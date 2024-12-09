// Função para contar quantas vezes uma letra aparece em uma frase
const contarLetra = (frase, letra) => {
    // Dividir a frase em uma lista de caracteres
    const listaDeCaracteres = frase.split('');
  
    // Procurar todas as ocorrências da letra
    const letrasEncontradas = listaDeCaracteres.filter(caracter => caracter === letra);
  
    // Contar quantas vezes a letra apareceu e retornamos esse número
    return letrasEncontradas.length;
  };
  
  // Testando a função com algumas frases
  console.log(contarLetra("frase de exemplo", "e"));  // Vai retornar 4
  console.log(contarLetra("olá mundo", "o"));        // Vai retornar 2
  console.log(contarLetra("teste de contagem", "t")); // Vai retornar 4
  console.log(contarLetra("programação", "a"));      // Vai retornar 2
  