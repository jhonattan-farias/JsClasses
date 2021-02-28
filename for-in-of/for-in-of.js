/*For of, e For in, são duas estruturas de repetição, sendo o (for of) usado para
arrays e valores em variaveis, o (for in) utilizado para propriedades de objetos. 

for of: quando temos uma variavel que contem um valor, e queremos pegar o valor
de cada posição dessa variavel podemos usar essa estrutura.*/

let text = 'jhonattan'

for(let char of text){
console.log(char)
}
//criamos uma variavel que recebe um valor que é uma string. Uso o for of para
//pegar um caractere de cada vez do texto que fica armazeda na let char.
//ele vai ficar nesse loop até que o numero de caracteres acabe.
/*
for in: Quando temos um objeto, e queremos um loop que capture uma propriedade 
do objeto de cada vez podemos usar o for in.
*/
let pessoa = {
nome:'jhon',
idade:19,
peso:'pena',
}

for(propriedade in pessoa){
console.log(pessoa[propriedade])
}
//Criamos+. uma variavel que recebe um objeto. Usamos o for in para pegar cada
//propriedade desse objeto. e mostramos em tela a propriedade dentro de pessoa.







