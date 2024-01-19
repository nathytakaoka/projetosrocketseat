console.log(`1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.`)

console.log(`Hello World!`)

console.log(`2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.`)

let numberOne = 12
let numberTwo = 3

let result = Number(numberOne + numberTwo)

console.log(`Resultado da soma de ${numberOne} + ${numberTwo} é ${result}`)

console.log(`3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
💡 Para saber o tipo de dado você pode usar o operador "typeof"`)

let variableString = "abc"
let variableNumber = 20

let resultTypeOf = typeof(variableString) == "number" ? console.log(`O tipo ${variableString} é um número`) : console.log(`O tipo ${variableString} não é um número`)

resultTypeOf = typeof(variableNumber) == "number" ? console.log(`O tipo ${variableNumber} é um número`) : console.log(`O tipo ${variableNumber} não é um número`)

console.log(`4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".`)

variableString = "abc"
variableNumber = 20

resultTypeOf = typeof(variableString) == "string" ? console.log(`O tipo ${variableString} é uma string`) : console.log(`O tipo ${variableString} não é uma string`)

resultTypeOf = typeof(variableNumber) == "string" ? console.log(`O tipo ${variableNumber} é uma string`) : console.log(`O tipo ${variableNumber} não é uma string`)

console.log(`5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".`)

variableString = "abc"
let variableBoolean = true

resultTypeOf = typeof(variableString) == "boolean" ? console.log(`O tipo ${variableString} é um boolean`) : console.log(`O tipo ${variableString} não é um boolean`)

resultTypeOf = typeof(variableBoolean) == "boolean" ? console.log(`O tipo ${variableBoolean} é um boolean`) : console.log(`O tipo ${variableBoolean} não é um boolean`)

console.log(`6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.`)

numberOne = 12
numberTwo = 3

result = Number(numberOne - numberTwo)

console.log(`Resultado da subtração de ${numberOne} - ${numberTwo} é ${result}`)

console.log(`7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.`)

numberOne = 12
numberTwo = 3

result = Number(numberOne * numberTwo)

console.log(`Resultado da multiplicação de ${numberOne} * ${numberTwo} é ${result}`)

console.log(`8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.`)

numberOne = 12
numberTwo = 3

result = Number(numberOne / numberTwo)

console.log(`Resultado da divisão de ${numberOne} / ${numberTwo} é ${result}`)

console.log(`9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".`)

numberOne = 12
numberTwo = 13

isOdd = (numberOne % 2) == 0 ? console.log(`O número ${numberOne} é um número par`) : console.log(`O número ${numberOne} não é um número par`)

isOdd = (numberTwo % 2) == 0 ? console.log(`O número ${numberTwo} é um número par`) : console.log(`O número ${numberTwo} não é um número par`)

console.log(`10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".`)

numberOne = 15
numberTwo = 8

isOdd = (numberOne % 2) == 0 ? console.log(`O número ${numberOne} não é um número ímpar`) : console.log(`O número ${numberOne} é um número ímpar`)

isOdd = (numberTwo % 2) == 0 ? console.log(`O número ${numberTwo} não é um número ímpar`) : console.log(`O número ${numberTwo} é um número ímpar`)