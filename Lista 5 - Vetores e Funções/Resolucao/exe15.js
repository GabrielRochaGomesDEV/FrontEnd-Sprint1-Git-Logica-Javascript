function reajustarPrecos(produtos) {
    // Reajusta os preços e cria uma nova lista
    
    const produtosReajustados = produtos.map(produto => {
        const [nome, preco] = produto.split(' - ');
        const precoNumerico = parseFloat(preco);

        // Aplica o reajuste se o preço for menor que 150

        const precoFinal = precoNumerico < 150 ? precoNumerico * 1.10 : precoNumerico;

        return `${nome} - ${precoFinal.toFixed(2)}`; // Retorna o nome e o preço formatado
    });

    // Ordena a lista de produtos por preço

    produtosReajustados.sort((a, b) => {
        const precoA = parseFloat(a.split(' - ')[1]);
        const precoB = parseFloat(b.split(' - ')[1]);
        return precoA - precoB;
    });

    // Exibe a lista final no console

    produtosReajustados.forEach(produto => {
        console.log(produto);
    });
}

// Exemplo de uso da função

const listaProdutos = [
    'Fruta - 140',
    'Bebida - 200',
    'Snack - 120',
    'Salgado - 150',
    'Doce - 80'
];

reajustarPrecos(listaProdutos);
