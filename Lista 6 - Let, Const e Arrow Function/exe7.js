// Função para verificar se um número é primo
const ehPrimo = (numero) => {
    if (numero < 2) return false; // Menores que 2 não são primos
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
};

// Função para mostrar números primos até um limite
const mostrarPrimos = (limite) => {
    let primos = ''; // String para armazenar os números primos
    for (let i = 1; i <= limite; i++) {
        if (ehPrimo(i)) {
            primos += `${i}, `;
        }
    }
    console.log(`Primos entre 1 e ${limite}: ${primos.slice(0, -2)}`); // Remove a última vírgula e espaço
};

// Exemplo 
const limite = 20; // Altere o limite como quiser
mostrarPrimos(limite);
