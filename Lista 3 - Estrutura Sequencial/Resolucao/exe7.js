         // Exibir votos em Porcentagem

var totalEleitores = 1000;

         //Soma dos votos não pode exceder números de Eleitores!

var votosBrancos = 150;
var votosNulos = 200;
var votosValidos = 650;

         //Transformando em porcentagem

var porcentagemVotosBrancos = votosBrancos / totalEleitores * 100
var porcentagemVotosNulos = votosNulos / totalEleitores * 100
var porcentagemVotosValidos = votosValidos / totalEleitores * 100 

console.log("Porcentagem de votos brancos: " + porcentagemVotosBrancos + "%" );
console.log("Porcentagem de votos nulos: " + porcentagemVotosNulos + "%" );
console.log("Porcentagem de votos válidos:" + porcentagemVotosValidos + "%" );
