var A, B, C;

A = 12;
B = 8.5;
C = 10;

if(A > B && A > C) {
    console.log(A + " é o maior")
}
else if(B > A && B > C) {
    console.log(B + " é o maior")
}
else {
    console.log(C + " é o maior")
}



// A função max do JavaScipt permite pegar o maior número
console.log(Math.max(A, B, C) + " é o maior")