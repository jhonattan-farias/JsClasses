/*O delete é um dos operadores unários do JavaScript. Quando queremos deletar alguma propriedade dentro de algum objeto, usamos o exemplo abaixo.
 */

 const personagensVivos = {
     personegem1:'Tanjirou',
     personagem2:'Rengoku',
     personagem3:'inosuke'
 }

 delete personagensVivos.personagem2

 console.log(personagensVivos)