let Q = [];
let count = 0;

while (count < 10) {
    let num = parseInt(prompt("Digite um número par:"));
    if (num % 2 === 0) {
        Q.push(num);
        count++;
    } else {
        console.log("Número inválido. Por favor, digite um número par.");
    }
}

let maior = Q[0];
let posicao = 0;

for (let i = 1; i < Q.length; i++) {
    if (Q[i] > maior) {
        maior = Q[i];
        posicao = i;
    }
}

console.log(`O maior elemento é ${maior} e está na posição ${posicao}.`);
