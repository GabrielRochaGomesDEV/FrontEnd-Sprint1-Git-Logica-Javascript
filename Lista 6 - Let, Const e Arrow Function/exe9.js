// Função para contar os dígitos de um número
const contarDigitos = (numero) => {
    let totalDigitos = Math.abs(numero).toString().length; // Conta os dígitos, ignorando o sinal
    console.log(`O número ${numero} tem ${totalDigitos} dígito(s).`);
};

// Exemplo de uso
const numero = -56789; // Substitua pelo número que quiser
contarDigitos(numero);
