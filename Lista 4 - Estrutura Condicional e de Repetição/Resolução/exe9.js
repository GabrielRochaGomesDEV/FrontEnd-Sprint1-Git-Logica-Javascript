// Utiliza-se um vetor para facilitar a verificação
var valores = [9, 4, 5, 7, 9]


// Uma variável para guardar o maior valor, ela recebe o primeiro numero da lista
var maiorValor = valores[0];


// Uma variável para guardar quantas vezes o maior valor aparece
var quantidadeDeVezesQueAparece = 0;



// Eu percorro a lista de valores verificando se o valor atual é maior do que o guardado na variável "maiorValor"
// Se o valor atual for maior, então eu guardo ele na variável
for (let index = 0; index < valores.length; index++) {
    if(valores[index] > maiorValor) {
        maiorValor = valores[index]
    }    
}



for (let index = 0; index < valores.length; index++) {
    if(valores[index] == maiorValor) {
        // quantidadeDeVezesQueAparece = quantidadeDeVezesQueAparece + 1;
        quantidadeDeVezesQueAparece++;
    }    
}



console.log("O maior número da lista é: " +maiorValor)
console.log("Esse número aparece " + quantidadeDeVezesQueAparece + " vezes na lista")