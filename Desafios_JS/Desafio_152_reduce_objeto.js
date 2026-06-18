const frutas = ["banana", "maçã", "banana", "laranja", "maçã", "banana"]

const resultado = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1
    return acc
}, {})

console.log(resultado)