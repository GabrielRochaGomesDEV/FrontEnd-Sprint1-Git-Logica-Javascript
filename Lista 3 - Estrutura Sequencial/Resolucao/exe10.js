     // Calcular tempo baseado na distância e velocidade

     // Usando os valores de referência para verificar o resultado!

var distancia = 150;
var velocidade = 65;

var tempoEmMinutos = distancia / velocidade * 60;

     // Math.round arredonda para o número inteiro mais próximo
      
console.log("O tempo para percorrer essa distância é de: " + Math.round(tempoEmMinutos) + " minutos");