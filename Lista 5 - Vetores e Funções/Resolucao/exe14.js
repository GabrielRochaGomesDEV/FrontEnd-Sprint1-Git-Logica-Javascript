function fatorialIterativo(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Exemplos de uso da função iterativa

console.log(fatorialIterativo(5));  // Saída: 120
console.log(fatorialIterativo(0));  // Saída: 1
console.log(fatorialIterativo(3));  // Saída: 6
