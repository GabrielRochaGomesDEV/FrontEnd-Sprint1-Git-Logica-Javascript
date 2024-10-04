var nota1, nota2, nota3;

nota1 = 6;
nota2 = 7;
nota3 = 8;

var media = (nota1 + nota2 + nota3) / 3;

var texto = "A nota do aluno foi de: " + media; 

if(media >= 6) {
    console.log(texto += "\nAprovado!")
} 
else {
    console.log(texto += "\nReprovado!")
}