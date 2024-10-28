// Função para converter Fahrenheit em Celsius

function converterFahrenheitParaCelsius() {
    const fahrenheit = parseFloat(prompt("Digite um valor em graus Fahrenheit:"));

    // Verifica se o valor inserido é válido

    if (isNaN(fahrenheit)) {
        console.log("Por favor, insira um número válido.");
        return;
    }

    // Cálculo da conversão

    const celsius = (fahrenheit - 32) * (5 / 9);

    // Exibe o resultado no console

    console.log(`${fahrenheit} graus Fahrenheit equivalem a ${celsius.toFixed(2)} graus Celsius.`);
}

// Chamar a função para executar a conversão

converterFahrenheitParaCelsius();
