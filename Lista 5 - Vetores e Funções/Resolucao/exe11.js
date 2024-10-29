function verificaNumero(num) {
    if (num > 0) {
        return 'P'; // Retorna 'P' se o número for positivo
    } else {
        return 'N'; // Retorna 'N' se o número for zero ou negativo
    }
}

// Exemplo de uso da função

const resultado1 = verificaNumero(5);
console.log(resultado1); // Saída: 'P'

const resultado2 = verificaNumero(0);
console.log(resultado2); // Saída: 'N'

const resultado3 = verificaNumero(-3);
console.log(resultado3); // Saída: 'N'
