     // Variáveis iniciais
var a, b, c;

     // Variáveis derivadas da fórmula;
     // Lembrando que a fórmula da equação de segundo gera dois valores de x
var delta, x1, x2;

a = 3;
b = 0;
c = -27;

     // Primeiro parênteses é desnecessário pois a exponenciação 
     // Será realizada antes da subtração
delta = (b ** 2) - (4 * a * c);

x1 = (- b + Math.sqrt(delta)) / (2 * a);
x2 = (- b - Math.sqrt(delta)) / (2 * a);

console.log("A primeira raiz da equação é: " + x1);
console.log("A segunda raiz da equação é: " + x2);