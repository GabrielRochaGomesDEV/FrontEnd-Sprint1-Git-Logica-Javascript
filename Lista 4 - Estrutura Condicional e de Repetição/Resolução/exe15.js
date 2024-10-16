var anterior, atual, proximo;

anterior = 0;
atual = 1;

for (let index = 0; index < 15; index++) {
    
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;    
    
    
    console.log(anterior);
}