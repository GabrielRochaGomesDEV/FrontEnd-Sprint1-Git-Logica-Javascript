var valores = [9, 4, 5, 2, 7]

var maiorValor = valores[0];
var menorValor = valores[0];

for (let index = 0; index < valores.length; index++) {
    if(valores[index] > maiorValor) {
        maiorValor = valores[index];
    }
    if(valores[index] < menorValor) {
        menorValor = valores[index];
    }
}

console.log("O maior valor é: " + maiorValor);
console.log("O menor valor é: " + menorValor);