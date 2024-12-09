// Função para gerar um retângulo de caracteres
const geraRetangulo = (linhas, colunas) => {
  // Criar a linha com o caractere 'V' repetido 'colunas' vezes
  const linha = 'V'.repeat(colunas);

  // Usar um loop para imprimir a linha 'linhas' vezes
  for (let i = 0; i < linhas; i++) {
    console.log(linha); // Imprime a linha no console a quantidade de vezes definida por 'linhas'
  }
};

// Testando a função
geraRetangulo(4, 6);  // Vai gerar um retângulo de 4 linhas e 6 colunas
