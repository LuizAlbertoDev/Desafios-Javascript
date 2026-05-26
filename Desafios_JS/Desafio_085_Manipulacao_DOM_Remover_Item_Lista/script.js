let contador = 1

const listaDom = document.getElementById("lista-dom")
const botao = document.getElementById("btn-adicionar")
const botaoRemover = document.getElementById("btn-remover")

botao.addEventListener("click", function(){
    const li = document.createElement("li")
    li.textContent = `Item ${contador}` 
    listaDom.appendChild(li)
    contador++
})

botaoRemover.addEventListener("click", function(){
    const ultimoItem = listaDom.lastElementChild
    if(ultimoItem){
        ultimoItem.remove()
        contador--
    }
})