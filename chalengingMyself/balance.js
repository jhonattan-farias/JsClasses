const saldo = {
    caixa:1000,
    divida:500,
}

function calcSaldo(){
    const total = saldo.caixa - saldo.divida

    saldo.caixa < saldo.divida ? 
    console.log(`Sua familia está com um saldo negativo de ${total} `):
    console.log(`sua familia esta com um saldo positivo de ${total}`)
}

calcSaldo()