// Contadores para valores dentro e fora do intervalo [10, 20]
let quantidadeDentroIntervalo = 0;
let quantidadeForaIntervalo = 0;

// Solicitar ao usuário que digite 10 valores
for (let i = 1; i <= 10; i++) {
    // Solicita o valor ao usuário, com uma mensagem amigável
    const valorDigitado = parseInt(prompt(`Por favor, digite o ${i}º valor:`));

    // Verifica se o valor digitado está dentro do intervalo [10, 20]
    if (valorDigitado >= 10 && valorDigitado <= 20) {
        // Se o valor estiver dentro do intervalo, incrementa o contador de dentro do intervalo
        quantidadeDentroIntervalo++;
    } else {
        // Se o valor estiver fora do intervalo, incrementa o contador de fora do intervalo
        quantidadeForaIntervalo++;
    }
}

// Exibe a quantidade de valores dentro e fora do intervalo de forma clara
console.log(`Você digitou ${quantidadeDentroIntervalo} valores dentro do intervalo [10, 20].`);
console.log(`Você digitou ${quantidadeForaIntervalo} valores fora do intervalo [10, 20].`);
