let nome = 'Tanjirou'
console.log(`${nome} tem ${nome.length} letras`)

let number = 12345678
console.log(`${number} tem ${number.length} digitos`)

console.log(`${number} tem ${String(number).length} digitos`)
/*No JavaScript, podemos contar a quantidade de letras que existe em uma palavra usando o método (length). 
Mas o (length) retorna apenas a quantidade de caracteres se forem strings. Não sendo assim possível contar uma quantidade 
de números dentro de uma variável por exemplo.

  Entretanto, existe uma solução simples pra isso. Podemos usar Type conversion (Conversão de Tipo), 
  para converter os números em string. E agora que os números se tornaram strings, podemos usar o (length) para contar os números.*/ 