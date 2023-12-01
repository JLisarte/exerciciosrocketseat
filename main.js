// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert(`Hello World!`)

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = prompt(`Digite dois números: 
Primeiro número:
`)
let NumberTwo = prompt(`Segundo número:`)

numberOne = Number(numberOne)
NumberTwo = Number(NumberTwo)

sum = numberOne + NumberTwo

alert(`A soma entre os números ${numberOne} e ${NumberTwo} é igula a ${sum}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
//     💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
let number = prompt(`Digite um número:`)

if(isNaN(number)) {
  alert(`O caractere ${number} não é um número`)
} else {
  alert(`O caractere ${number} é um número`)
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let string = prompt(`Digite uma string:`)

if(isNaN(string)) {
  alert(`O caractere ${string} é uma string`)
} else {
  alert(`O caractere ${string} não é uma string`)
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let a = true
if (typeof a === "boolean") {
  alert(`a é booleano!`)
} 

let b = "string"
if (typeof b !== "boolean") {
  alert(`b não é booleano!`)
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let numberOne = prompt(`Digite dois números: 
  Primeiro número:
`)
let NumberTwo = prompt(`Segundo número:`)

numberOne = Number(numberOne)
NumberTwo = Number(NumberTwo)

sub = numberOne - NumberTwo

alert(`A subtração entre os números ${numberOne} e ${NumberTwo} é igula a ${sub}`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

mult = numberOne * NumberTwo

alert(
  `A multiplicação entre os números ${numberOne} e ${NumberTwo} é igula a ${mult}`
)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

div = numberOne / NumberTwo

alert(
  `A divisão entre os números ${numberOne} e ${NumberTwo} é igula a ${div}`
)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let number = prompt(`Digite um número`)

if (number % 2 == 0 ) {
  alert(`É um número par`)
} else {
  alert(`Não é um número par`)
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let number = prompt(`Digite um número`)

if (number / 2 == 0 ) {
  alert(`Não é um número ímpar`)
} else {
  alert(`É um número ímpar`)
}