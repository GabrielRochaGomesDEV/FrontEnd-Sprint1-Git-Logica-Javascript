const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
  ];
  
  //Empresas criadas depois dos anos 2000
  const empresasDepois2000 = empresas.filter(empresa => empresa.anoDeCriacao > 2000);
  console.log("Empresas criadas depois dos anos 2000:", empresasDepois2000);
  
  //O nome de cada empresa e de seu CEO
  const nomesECeo = empresas.map(empresa => ({ nome: empresa.nome, CEO: empresa.CEO }));
  console.log("Nome de cada empresa e seu CEO:", nomesECeo);
  
  //O valor de todas as empresas somadas
  const valorTotalDeMercado = empresas.reduce((acumulador, empresa) => acumulador + empresa.valorDeMercado, 0);
  console.log("Valor de todas as empresas somadas:", valorTotalDeMercado);
  