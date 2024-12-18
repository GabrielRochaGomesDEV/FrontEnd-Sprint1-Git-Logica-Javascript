// Array de filmes com suas respectivas propriedades
const filmes = [
    {
      "id": 1,
      "title": "Die Hard",
      "valor": 12.00,
      "rating": 5.0
    },
    {
      "id": 2,
      "title": "Homem Aranha 1",
      "valor": 8.00,
      "rating": 4.0
    },
    {
      "id": 3,
      "title": "Homem de Ferro",
      "valor": 7.00,
      "rating": 3.0
    },
    {
      "id": 4,
      "title": "Die Hard 2",
      "valor": 13.00,
      "rating": 5.0
    }
  ];
  
  // Filtra filmes cujo id seja um número par
  const filmesComIdPar = filmes.filter(filme => filme.id % 2 === 0);
  
  // Exibi os filmes com id par no console
  console.log("Filmes com id par:", filmesComIdPar);
  