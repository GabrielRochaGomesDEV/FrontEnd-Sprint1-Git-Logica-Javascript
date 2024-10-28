// Função para calcular as temperaturas da semana

function calcularTemperaturas() {
    const temperaturas = []; // Vetor para armazenar as temperaturas

    // Ler as temperaturas dos dias da semana

    for (let i = 0; i < 7; i++) {
        const temperatura = parseFloat(prompt(`Digite a temperatura média do dia ${i + 1}:`));
        temperaturas.push(temperatura);
    }

    // Inicializar variáveis para menor, maior e soma das temperaturas

    let menorTemperatura = temperaturas[0];
    let maiorTemperatura = temperaturas[0];
    let somaTemperaturas = 0;

    // Calcular menor, maior e soma das temperaturas

    for (let i = 0; i < 7; i++) {
        somaTemperaturas += temperaturas[i];

        if (temperaturas[i] < menorTemperatura) {
            menorTemperatura = temperaturas[i];
        }

        if (temperaturas[i] > maiorTemperatura) {
            maiorTemperatura = temperaturas[i];
        }
    }

    // Calcular a média semanal

    const mediaSemanal = somaTemperaturas / 7;

    // Contar dias com temperatura inferior à média

    let diasInferiores = 0;
    for (let i = 0; i < 7; i++) {
        if (temperaturas[i] < mediaSemanal) {
            diasInferiores++;
        }
    }

    // Exibir resultados no console
    
    console.log(`Menor temperatura da semana: ${menorTemperatura}`);
    console.log(`Maior temperatura da semana: ${maiorTemperatura}`);
    console.log(`Temperatura média semanal: ${mediaSemanal}`);
    console.log(`Número de dias com temperatura inferior à média semanal: ${diasInferiores}`);
}

// Chamar a função para executar o cálculo
calcularTemperaturas();
