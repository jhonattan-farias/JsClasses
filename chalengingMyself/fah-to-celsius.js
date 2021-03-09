const toCelsius = (F) =>
{ 
    const C = ( F - 32) * 5/9
    return console.log(C)
}

const toFahrenheint = (C) =>
{
    const F = (C * 9/5) + 32
    return console.log(F)
}

const convert = (type,value) => 
{
    type === 'F' ? toCelsius(value) : toFahrenheint(value)     
}

convert('F',30)