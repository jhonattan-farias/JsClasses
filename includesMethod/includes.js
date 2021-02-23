const text = 'Give 6 hours to cut off a tree, and i`ll spend 4 hours sharpening the ax.'
console.log(text.includes('ax'))

/*### Existe uma maneira simples no JavaScript de descobrir se existe uma certa palavra em um texto. Podemos usar o método includes() para descobrir.

### Basta apenas usar o nome da variável que contem o texto usando o .includes() 
e dentro dos parâmetros a palavra que deseja encontrar. O retorno será um booleano true ou false.

### Lembrando que o método é case-sensitive. Então se usar uma letra maiúscula 
na palavra, é preciso colocar ela maiúscula na busca também.*/