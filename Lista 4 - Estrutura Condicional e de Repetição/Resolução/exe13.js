var A;

A = 5;

var soma = 0;

var produto = 1;

for (let index = 0; index < A; index++) {
    // Se for par soma
    if(index % 2 == 0) {
        soma = soma + index;
    }
    // Se for ímpar multiplica
    else {
        produto = produto * index;
    }
}

console.log("Soma: " + soma);
console.log("Produto: " + produto);