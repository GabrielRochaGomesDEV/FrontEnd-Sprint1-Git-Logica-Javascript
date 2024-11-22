// Função para calcular o total da compra
function calcularTotal(morangoKg, macaKg) {
    // Preço do morango depende da quantidade comprada
    const precoMorango = morangoKg <= 5 ? 2.50 : 2.20; // Se comprar até 5 Kg, o preço é R$ 2.50/kg, caso contrário R$ 2.20/kg

    // Preço da maçã depende da quantidade comprada
    const precoMaca = macaKg <= 5 ? 1.80 : 1.50; // Se comprar até 5 Kg, o preço é R$ 1.80/kg, caso contrário R$ 1.50/kg

    // Calculando o total que o cliente vai pagar pelos morangos e pelas maçãs
    const valorMorango = morangoKg * precoMorango; // Total de morangos
    const valorMaca = macaKg * precoMaca; // Total de maçãs
    let total = valorMorango + valorMaca; // Somando os dois totais para obter o valor final sem desconto

    // Verificando se o cliente tem direito a desconto de 10%:
    // Se comprar mais de 8 kg de frutas ou se o total ultrapassar R$ 25,00
    let desconto = 0; // Variável para armazenar o valor do desconto
    if (morangoKg + macaKg > 8 || total > 25) {
        desconto = total * 0.10; // Calculando 10% de desconto
        total -= desconto; // Subtraindo o desconto do total
    }

    // Função para arredondar os valores para duas casas decimais com toFixed()
    function arredondar(valor) {
        return parseFloat(valor.toFixed(2)); // Arredonda para 2 casas decimais e converte de volta para número
    }

    // Exibindo as informações detalhadas no console para o cliente
    console.log(`Morango: ${morangoKg} Kg - R$ ${arredondar(valorMorango)}`); // Mostra o valor total dos morangos
    console.log(`Maçã: ${macaKg} Kg - R$ ${arredondar(valorMaca)}`); // Mostra o valor total das maçãs
    console.log(`Total antes do desconto: R$ ${arredondar(valorMorango + valorMaca)}`); // Mostra o total sem o desconto

    // Se houver desconto, mostramos o valor que foi descontado
    if (desconto > 0) {
        console.log(`Desconto de 10% aplicado: -R$ ${arredondar(desconto)}`); // Exibe o desconto de 10%
    }

    // Exibe o total final após o desconto (se aplicável)
    console.log(`Total a pagar: R$ ${arredondar(total)}`); // Mostra o valor final a pagar
}

// Pedindo para o cliente informar a quantidade de morangos e maçãs
let morangoKg = prompt("Quantos Kg de morango você comprou?");
let macaKg = prompt("Quantos Kg de maçã você comprou?");

// Convertendo as entradas de texto para números decimais
morangoKg = parseFloat(morangoKg);
macaKg = parseFloat(macaKg);

// Verificando se as quantidades fornecidas são válidas (números positivos)
if (morangoKg > 0 && macaKg > 0) {
    // Se as quantidades forem válidas, chamamos a função para calcular o total
    calcularTotal(morangoKg, macaKg);
} else {
    // Se as quantidades não forem válidas (negativas ou zero), mostramos uma mensagem de erro
    console.log("Por favor, insira valores válidos e positivos para as quantidades de frutas.");
}
