// Função principal

function main() {
    // Array para armazenar os nomes

    let nomes = [];

    // Leitura de 5 nomes

    for (let i = 0; i < 5; i++) {
        let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
        nomes.push(nome);
    }

    // Leitura do nome a ser pesquisado

    let nomePesquisado = prompt("Digite o nome a ser pesquisado:");

    // Verificação se o nome está entre os 5 nomes lidos

    if (nomes.includes(nomePesquisado)) {
        console.log("ACHEI");
    } else {
        console.log("NÃO ACHEI");
    }
}

// Chama a função principal

main();
