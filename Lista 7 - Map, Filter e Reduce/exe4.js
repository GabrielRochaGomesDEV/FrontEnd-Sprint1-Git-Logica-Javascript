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
  
  //Apresenta os valores com 10% de desconto
  const comDesconto = filmes.map(filme => {
    return {
      ...filme,
      valorComDesconto: filme.valor * 0.9 //10% de desconto
    };
  });
  
  console.log("Filmes com desconto de 10%:");
  console.log(comDesconto);
  
  //Apresenta os valores maior que 10,00
  const maioresQue10 = filmes.filter(filme => filme.valor > 10);
  
  console.log("Filmes com valor maior que 10,00:");
  console.log(maioresQue10);
  