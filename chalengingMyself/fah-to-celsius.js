const toCelsius = (F) =>
{ 
    const C = ( F - 32) * 5/9
    console.log(C)
}

const toFahrenheint = (C) =>
{
    const F = (C * 9/5) + 32
    console.log(F)
}

const convert = (type,value) => 
{
    type === 'F' ? 
    toCelsius(value) : 
    toFahrenheint(value)     
}

convert('C',30)