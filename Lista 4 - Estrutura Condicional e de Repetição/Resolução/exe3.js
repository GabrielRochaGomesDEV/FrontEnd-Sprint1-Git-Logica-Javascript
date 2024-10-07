var A, B;

A = 4;
B = 2;

/* 
    Primeiro se descobre se A é maior que B;
    dependendo de quem é o maior número
    a ordem da divisão é diferente
*/

if(A > B) {
    /* 
        Utiliza-se o operador de resto "%"
        Se o resto da divisão do maior número pelo menor
        for 0, então os números são multiplos
    */


if(A % B == 0) {
        console.log("São múltiplos")
    }
else {
        console.log("Não são múltiplos");
    }
}

else 
{
if(B % A == 0) {
        console.log("São múltiplos")
               }

else {
        console.log("Não são múltiplos");
     }
}