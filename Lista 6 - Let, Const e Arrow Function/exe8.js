// Função para imprimir o padrão
const mostrarPadrao = (n) => {
    for (let i = 1; i <= n; i++) {
        let linha = `${i} `.repeat(i); // Repete o número i, i vezes
        console.log(linha.trim()); // Remove o espaço extra no final
    }
};

// Exemplo de uso
const limite = 5; // Substitua pelo número desejado
mostrarPadrao(limite);
