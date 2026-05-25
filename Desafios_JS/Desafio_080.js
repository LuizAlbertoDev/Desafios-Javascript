const carro = {
    marca:"Mercedez",
    modelo:"C300",
    ano:2010,
    ligado:true
}

for(let propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`)
}

function ligar(carro){
    carro.ligado = true
    return `Carro Ligado!`
}

function desligar(carro){
    carro.ligado = false
    return `Carro Desligado!`
}

console.log(ligar(carro))    
console.log(carro.ligado)    
console.log(desligar(carro)) 
console.log(carro.ligado)