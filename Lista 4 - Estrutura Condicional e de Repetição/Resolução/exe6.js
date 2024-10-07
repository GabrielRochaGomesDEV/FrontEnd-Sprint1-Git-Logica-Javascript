
sexo = "Feminino";
altura = 1.63;

if(sexo == "Masculino") {
    imcIdeal = 72.7 * altura - 58;
}
else if(sexo == "Feminino"){
    imcIdeal = 62.1 * altura - 44.7;
}

console.log(imcIdeal)