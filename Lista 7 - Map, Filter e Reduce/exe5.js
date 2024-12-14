var filmes = [
    {
      "id": 1,
      "title": "Die Hard",
      "valor": 12.00,
      "rating": 5.0
    },
    {
      "id": 2,
      "title": "Homem aranha 1",
      "valor": 8.00,
      "rating": 4.0
    },
    {
      "id": 3,
      "title": "Homem de ferro",
      "valor": 7.00,
      "rating": 3.0
    },
    {
      "id": 4,
      "title": "Die Hard",
      "valor": 13.00,
      "rating": 5.0
    }
  ];
  
  // Filtra os filmes com valor menor que 10,00
  const filmesMenorQue10 = filmes.filter(filme => filme.valor < 10);
  
  // Obtem a soma dos valores menores que 10,00 usando reduce
  const soma = filmesMenorQue10.reduce((acumulador, filme) => acumulador + filme.valor, 0);
  
  // Calcula a média
  const media = soma / filmesMenorQue10.length;
  
  console.log("Média dos valores menores que 10,00:");
  console.log(media);
  