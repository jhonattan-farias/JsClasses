
function checkIfNumberIsOne(value){

    if(value !== 1){
     throw new Error('numero não é o esperado')
}

    else{
     console.log('parabens esse é o numero esperado')
}

}

try{
    let number = 2
    checkIfNumberIsOne(number)
} 

catch(erro){
    console.log(erro.message)
}











//Quando queremos criar uma função e sabemos que poderá dar algum erro. 
//Podemos usar um metodo de captura de erro que facilite na resolução de
//algum problema futuro.Exemplo

//Criamos uma função checando se o valor recebido é 1. Se o valor não for um,
//lançamos um erro com throw new Error('....') que cria uma mensagem de erro pra gente
//baseada no que colocamos no paramêtro.
//	Agora usamos o try para 'tentar executar a função'.
//se tudo tiver ok, a função executa. Agora se não estiver, capturamos o erro com 
//catch e capturamos a mensagem do erro com error.message.
//Pronto. Agora se algum erro acontecer, saberemos daonde veio e como resolver.










