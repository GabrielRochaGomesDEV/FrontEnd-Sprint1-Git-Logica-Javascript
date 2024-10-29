function contarDigitos(numero) {
    // Converte o número para string e remove o sinal negativo, se houver
    const numeroStr = Math.abs(numero).toString();
    return numeroStr.length; // Retorna o comprimento da string
}

// Exemplos de uso da função
console.log(contarDigitos(12345));  // Saída: 5
console.log(contarDigitos(-9876));   // Saída: 4
console.log(contarDigitos(0));       // Saída: 1
