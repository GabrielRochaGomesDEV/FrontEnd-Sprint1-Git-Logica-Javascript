const habitantes = [];
let salario, numeroFilhos;

do {
  // Solicita o salário
  salario = parseFloat(prompt("Digite o salário do habitante (negativo para encerrar): "));

  if (salario < 0) break; // Termina se o salário for negativo

  // Solicita o número de filhos
  numeroFilhos = parseInt(prompt("Digite o número de filhos do habitante: "), 10);

  // Armazena os dados do habitante
  habitantes.push({ salario, numeroFilhos });
} while (true);

// Variáveis para os cálculos
let somaSalarios = 0;
let somaFilhos = 0;
let maiorSalario = 0;
let salarioMenorQue1000 = 0;

// Processa os dados
for (const habitante of habitantes) {
  somaSalarios += habitante.salario;
  somaFilhos += habitante.numeroFilhos;
  if (habitante.salario > maiorSalario) maiorSalario = habitante.salario;
  if (habitante.salario < 1000) salarioMenorQue1000++;
}

// Calcula os resultados
const totalHabitantes = habitantes.length;
const mediaSalarios = totalHabitantes ? somaSalarios / totalHabitantes : 0;
const mediaFilhos = totalHabitantes ? somaFilhos / totalHabitantes : 0;
const percentualMenorQue1000 = totalHabitantes ? (salarioMenorQue1000 / totalHabitantes) * 100 : 0;

// Mostra os resultados no console
console.log(`Média de salário da população: R$ ${mediaSalarios.toFixed(2)}`);
console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`);
console.log(`Maior salário dos habitantes: R$ ${maiorSalario.toFixed(2)}`);
console.log(`Percentual de pessoas com salário menor que R$ 1000,00: ${percentualMenorQue1000.toFixed(2)}%`);
