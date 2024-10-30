# Exercícios de Interpretação de Código - JS

- **01 - Cálculo de CPF -** Dado o script abaixo assinale as estruturas encontradas e o devido trecho que justifique sua existência:
    
    **Exemplo:** 
    
    - [x]  Método
        
        ```jsx
        **function calculacpf()**
        ```
        
    
    **Exercício completo:**
    
    ```jsx
    function calculacpf(){
      var cpf = $("#input").val();
    
      // Todos esses dígitos funcionam no cálculo, por isso há a necessidade de falar que é inválido logo de cara
      if(cpf != "000.000.000-00"
        && cpf != "111.111.111-11"
        && cpf != "222.222.222-22"
        && cpf != "333.333.333-44"
        && cpf != "555.555.555-55"
        && cpf != "666.666.666-66"
        && cpf != "777.777.777-77"
        && cpf != "888.888.888-88"
        && cpf != "999.999.999-99")
      {
        var j = 0;
        var cpfsemdigito = [];
    
          // O tamanho total do cpf é 14 pois conta-se os '.'' e os '-'
          for (var i = 0; i < 14; i++){
            if(cpf[i] !== '.' && cpf[i] !== '-'){
              //Armazena num index j novo pois se for utilizar o index i, irá armazenar em posições inválidas             
              cpfsemdigito[j] = cpf[i]; 
              j++;
            }            
          }
    
          // O peso1 decrementa até 2
    
          var peso1 = 10;
          var totalsoma1 = 0;
    
          // i se extende até 9 pois não se usa os dois dígitos finais para a soma
    
          for(i = 0; i < 9;i++){            
            totalsoma1 = totalsoma1 + cpfsemdigito[i]*peso1;
            peso1--;              
          }
    
          //O resto da divisão subtrai-se com o 11, se for maior que 9 o primeiro dígito tem que ser 0 para ser considerado um CPF válido
          //Caso contrário o primeiro dígito tem que ser igual ao resultado de 11 - resto da divisão
    
          var restodasoma1 = totalsoma1%11;
          var totalsubtracao1 = 11 - restodasoma1;
          var primeiravalidacao = false;
    
          //Checando se o primeiro dígito do CPF condiz com a conta;
          if(totalsubtracao1 >= 10){
            //O primeiro dígito faz com que o CPF seja válido, agora é necessário calcular o segundo dígito.      
            switch(cpf[12]){                  
              case "0":
              primeiravalidacao = true;
              break
    
              default:
              alert("O CPF digitado não existe");
              break; 
            }            
          }              
          else{
          //Caso for menor que 9, então o primeiro dígito tem que ser igual ao total da subtração
    
            //Transformando a string do primeiro dígito em inteiro para checar se é igual ao total da subtração        
            switch(parseInt(cpf[12])){                  
              case totalsubtracao1:
              primeiravalidacao = true;
              break;
    
              default:
              alert("O CPF digitado não existe");
              break; 
            }             
          }
         //Checando se o segundo dígito é válido, caso a primeira validação for verdadeira
    
         if(primeiravalidacao == true){
            // O peso2 decrementa até 2
    
            var peso2 = 11;      
            var totalsoma2 = 0;
            // i se extende até 10 pois se usa até o primeiro dígito do CPF
    
            for(i = 0; i < 10;i++){            
              totalsoma2 = totalsoma2 + cpfsemdigito[i]*peso2;
              peso2--;              
            }
    
            var restodasoma2 = totalsoma2%11;
            var totalsubtracao2 = 11 - restodasoma2;
            var segundavalidacao = false;
            //Se for maior que 9 o segundo dígito tem que ser 0 para ser considerado um CPF válido
            if(totalsubtracao2 >= 10){        
              switch(cpf[13]){                  
                case "0":
                segundavalidacao = true;
                break
    
                default:
                alert("O CPF digitado é inválido");
                break; 
              }
            }              
            else{
              //Caso for menor que 9, então o segundo dígito tem que ser igual ao total da subtração 2  
    
              //Transformando a string do segundo dígito em inteiro para checar se é igual ao total da subtração 2
              switch(parseInt(cpf[13])){                  
                case totalsubtracao2:
                segundavalidacao = true;
                break;
    
                default:
                alert("O CPF digitado é inválido");
                break; 
              }                  
            }
          }
    
        }
        else{
          alert("O CPF digitado é inválido");
        }
      }
    ```
    
    Assinale e justifique as estruturas encontradas:
    
    - [x]  Variáveis
        - [x]  String
              var cpf = $("#input").val();
        - [x]  Booleana
              primeiravalidacao = true;
        - [x]  Inteira
              var i = 0;
        - [x]  Array/Vetor
            var cpfsemdigito = [];
    - [ ]  Constantes
        - [ ]  String
        - [ ]  Booleana
        - [ ]  Inteira
        - [ ]  Array/Vetor
    - [x]  Métodos
        - [x]  Argumentos
               parseInt(**cpf[12]**)
    - [x]  Estururas
        - [x]  Condicional
            - [x]  Simples
               parseInt(cpf[12])
            - [x]  Composta
            **// Aqui >>>>>>>>>>>>>>>>>>>>>>>>**
**if(primeiravalidacao == true){**
        // O peso2 decrementa até 2

        var peso2 = 11;      
        var totalsoma2 = 0;
        // i se extende até 10 pois se usa até o primeiro dígito do CPF

        for(i = 0; i < 10;i++){            
          totalsoma2 = totalsoma2 + cpfsemdigito[i]*peso2;
          peso2--;              
        }

        var restodasoma2 = totalsoma2%11;
        var totalsubtracao2 = 11 - restodasoma2;
        var segundavalidacao = false;

**// Aqui >>>>>>>>>>>>>>>>>>>>>>>>**        
				//Se for maior que 9 o segundo dígito tem que ser 0 para ser considerado um CPF válido
        **if(totalsubtracao2 >= 10){**        
          switch(cpf[13]){                  
            case "0":
            segundavalidacao = true;
            break

            default:
            alert("O CPF digitado é inválido");
            break; 
          }
        }              
        else{
          //Caso for menor que 9, então o segundo dígito tem que ser igual ao total da subtração 2  

          //Transformando a string do segundo dígito em inteiro para checar se é igual ao total da subtração 2
          switch(parseInt(cpf[13])){                  
            case totalsubtracao2:
            segundavalidacao = true;
            break;

            default:
            alert("O CPF digitado é inválido");
            break; 
          }                  
        }
      }**
    - [x]  Laços de repetição
        - [x]  Contado
            for(i = 0; i < 10;i++){            
             totalsoma2 = totalsoma2 + cpfsemdigito[i]*peso2;
              peso2--;              
            }
        - [ ]  Condicional
    - [ ]  Operadores lógicos
        - [x]  E
                if(cpf != "000.000.000-00"
                && cpf != "111.111.111-11"
                && cpf != "222.222.222-22"
                && cpf != "333.333.333-44"
                && cpf != "555.555.555-55"
                && cpf != "666.666.666-66"
                && cpf != "777.777.777-77"
                && cpf != "888.888.888-88"
                && cpf != "999.999.999-99")
{}
        - [ ]  OU

- **02 - Sequência Fibonacci -** Dado o script abaixo assinale as estruturas encontradas e o devido trecho que justifique sua existência:
    
    **Exemplo:** 
    
    - [x]  Método

          **const fib = n =>**
        
        
    
    **Exercício completo:**
    
    ```jsx
    // A função recursiva vai receber um número, que representa o último index da sequência
    const fib = n => {
      // Se esse número for 1, então apenas retorne [0, 1]
      if (n === 1) {
        return [0, 1];
      } else {
        // Se não for, chame essa mesma função, com n - 1
        const s = fib(n - 1);
        
        // Ao retornar, s recebe seu valor atual + o valor que a função retornou:
        // Nota: esse fluxo de chamar a função pode ocorrer dezenas de vezes (depende de n)
        s.push(s[s.length - 1] + s[s.length - 2]);
        
        // E então retornamos s
        return s;
      }
    };
    
    // Aqui é o ponto de entrada: X - 1:
    // Onde X é até qual número da sequência queremos mostrar
    const index = 5 - 1;
    
    // Aqui simplesmente pegamos o array retornado pela função fib e transformamos em uma string,
    // string essa que separa cada termo por um espaço
    const sequence = fib(index).join(" ");
    
    // Por fim, mostramos a string
    console.log(sequence);
    ```
    
    Assinale e justifique as estruturas encontradas:
    
    - [ ]  Variáveis
        - [ ]  String
        - [ ]  Booleana
        - [ ]  Inteira
        - [ ]  Array/Vetor
    - [ ]  Constantes
        - [ ]  String
        - [ ]  Booleana
        - [x]  Inteira
             const index = 5 - 1;
        - [ ]  Array/Vetor
    - [x]  Métodos
        - [x]  Argumentos
              fib(n - 1);
    - [x]  Estururas
        - [x]  Condicional
            - [x]  Simples
             if (n === 1) {
             return [0, 1];
             }
            - [ ]  Composta
    - [ ]  Laços de repetição
        - [ ]  Contado
        - [ ]  Condicional
    - [ ]  Operadores lógicos
        - [ ]  E
        - [ ]  OU

- **03 - Preço do ingresso -** Dado o script abaixo assinale as estruturas encontradas e o devido trecho que justifique sua existência:
    
    **Exemplo:** 
    
    - [x]  Método
        
        ```jsx
        **str.split(" ")**
        ```
        
    
    **Exercício completo:**
    
    ```jsx
    // Calcular a porcentagem de acréscimo no preço de ingressos
    
    // Entrada
    // A única linha da entrada consiste de dois valores A e B (0.00 < A ≤ B ≤ 1000.00),
    // os quais, fornecidos com exatos dois dígitos após o ponto separador decimal, 
    // representam respectivamente o valor antigo e o valor novo do ingresso do cinema.
    
    // Saída
    // A única linha da saída deve consistir unicamente de um valor, 
    // que represente como uma porcentagem o aumento do valor do ingresso. 
    // O valor deve ser acompanhado do símbolo % e conter exatos dois dígitos após o ponto separador decimal.
    
    // CÓDIGO ----------------------------------------------------------------------------------------------------
    
    // Variável com todas as entradas do usuário
    const lines = ["20.00 30.00"];
    
    // Pegamos o primeiro valor, e único, das entradas do usuário
    const str = lines.shift();
    
    // Dividimos essa string em 2 valores, o antigo valor (o primeiro, oldValue)
    // E em novo valor (o segundo, newValue)
    // O split() separa a string em um array com cada valor
    // O map converte cada um desses valores em números para um Integer, Inteiro, Número
    const [oldValue, newValue] = str.split(" ").map(value => Number(value));
    
    // Pra achar essa porcentagem, é só usar a regra de três proporcional que vimos séculos no passado na escola
    // Se antigo valor é igual a 100%, então o novo valor é igual a X%, que vai dar:
    // oldValue ====> 100%
    // newValue ====> X%
    // oldValue * X = newValue * 100
    // X = (newValue * 100) / oldValue -> Isso é o que está escrito abaixo em forma de código
    const percentage = (newValue * 100) / oldValue;
    
    // Calculamos a diferença, que é a nova porcentagem - 100 (que é a antiga)
    const dif = percentage - 100;
    
    // E então mostramos no console essa diferença com 2 casas decimais
    console.log(`${dif.toFixed(2)}%`);
    
    // Saída esperada para o valor R$20,00 como antigo valor e o valor R$30,00 como novo valor
    // '50.00%'
    ```
    
    Assinale e justifique as estruturas encontradas:
    
    - [ ]  Variáveis
        - [ ]  String
        - [ ]  Booleana
        - [ ]  Inteira
        - [x]  Array/Vetor
             const lines = ["20.00 30.00"];
    - [ ]  Constantes
        - [ ]  String
        - [ ]  Booleana
        - [x]  Inteira
             const percentage = (newValue * 100) / oldValue;
             const dif = percentage - 100;
        - [ ]  Array/Vetor
    - [x]  Métodos
        - [x]  Argumentos
             dif.toFixed(2)
    - [ ]  Estururas
        - [ ]  Condicional
            - [ ]  Simples
            - [ ]  Composta
    - [ ]  Laços de repetição
        - [ ]  Contado
        - [ ]  Condicional
    - [ ]  Operadores lógicos
        - [ ]  E
        - [ ]  OU