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
  
  // Filtra os filmes com rating igual a 5.0 e retornar apenas os ids
  const idsFilmesComRating5 = filmes
    .filter(filme => filme.rating === 5.0)  // Filtra filmes com rating 5.0
    .map(filme => filme.id);  // Mapeia para retornar apenas os ids dos filmes
  
  // Mostre os resultados no console
  console.log("IDs dos filmes com rating 5.0:", idsFilmesComRating5);
  