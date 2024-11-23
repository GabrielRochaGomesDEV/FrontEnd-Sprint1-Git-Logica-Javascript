// Função para calcular o total da compra
function calcularTotal(morangoKg, macaKg) {
    // Preço do morango e da maçã dependendo da quantidade
    const precoMorango = morangoKg <= 5 ? 2.50 : 2.20;
    const precoMaca = macaKg <= 5 ? 1.80 : 1.50;

    // Calculando o valor total sem desconto
    const valorMorango = morangoKg * precoMorango;
    const valorMaca = macaKg * precoMaca;
    let total = valorMorango + valorMaca;

    // Verifica se a quantidade total de frutas é maior que 8 kg ou o valor total ultrapassa R$ 25,00
    let desconto = 0; // Variável para controlar o valor do desconto
    if (morangoKg + macaKg > 8 || total > 25) {
        desconto = total * 0.10; // Calcula 10% de desconto
        total -= desconto; // Aplica o desconto
    }

    // Função para arredondar os valores para duas casas decimais
    function arredondar(valor) {
        return Math.round(valor * 100) / 100;
    }

    // Exibe os resultados no console
    console.log(`Morango: ${morangoKg} Kg - R$ ${arredondar(valorMorango)}`);
    console.log(`Maçã: ${macaKg} Kg - R$ ${arredondar(valorMaca)}`);
    console.log(`Total antes do desconto: R$ ${arredondar(valorMorango + valorMaca)}`);
    
    // Mostra o desconto somente se ele for aplicado
    if (desconto > 0) {
        console.log(`Desconto de 10% aplicado: -R$ ${arredondar(desconto)}`);
    }

    console.log(`Total a pagar: R$ ${arredondar(total)}`);
}

// Solicita as quantidades de morangos e maçãs ao usuário
let morangoKg = prompt("Quantos Kg de morango você comprou?");
let macaKg = prompt("Quantos Kg de maçã você comprou?");

// Converte as entradas para números
morangoKg = parseFloat(morangoKg);
macaKg = parseFloat(macaKg);

// Verifica se os valores inseridos são números válidos e positivos
if (morangoKg > 0 && macaKg > 0) {
    // Se ambos os valores forem válidos, chama a função para calcular o total
    calcularTotal(morangoKg, macaKg);
} else {
    // Se algum valor for inválido, exibe uma mensagem de erro
    console.log("Por favor, insira valores válidos e positivos para as quantidades de frutas.");
}

