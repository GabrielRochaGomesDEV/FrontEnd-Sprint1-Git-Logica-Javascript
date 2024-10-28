// Função para converter metros em decímetros, centímetros e milímetros

function converterMetros() {
    const metros = parseFloat(prompt("Digite um valor em metros:"));

    // Verifica se o valor inserido é válido

    if (isNaN(metros)) {
        console.log("Por favor, insira um número válido.");
        return;
    }

    // Realiza as conversões

    const decimetros = metros * 10;
    const centimetros = metros * 100;
    const milimetros = metros * 1000;

    // Exibe os resultados no console

    console.log(`${metros} metros equivalem a:`);
    console.log(`${decimetros} decímetros`);
    console.log(`${centimetros} centímetros`);
    console.log(`${milimetros} milímetros`);
}

// Chamar a função para executar a conversão

converterMetros();
