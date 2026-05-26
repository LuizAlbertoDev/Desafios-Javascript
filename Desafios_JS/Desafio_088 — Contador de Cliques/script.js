let contador = 0

const h2contador = document.getElementById("contador")
const somar = document.getElementById("somar")
const subtrair = document.getElementById("subtrair")
const zerar = document.getElementById("zerar")

function atualizarContador(){
    h2contador.textContent = `Contador: ${contador}`
    if(contador > 0){
        h2contador.style.color = "green"
    } else {
        h2contador.style.color = "black"
    }
}

somar.addEventListener("click", function(){
    if(contador >= 0){
    contador++
    atualizarContador()
}})

subtrair.addEventListener("click", function(){
    if(contador > 0){
    contador--
    atualizarContador()
}})

zerar.addEventListener("click", function(){
    contador = 0
    atualizarContador()
})

