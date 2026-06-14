const container = document.getElementById("container")
const botao = document.createElement("button")
const ul = document.createElement("ul")
const produtos = [
  "Arroz",
  "Feijão",
  "Macarrão"
]

botao.textContent = "Mostrar Produtos"

botao.addEventListener("click",() => {
    ul.innerHTML = ""
    produtos.forEach(produto => {
            
        const lista = document.createElement("li")
        lista.textContent = produto
        ul.appendChild(lista)
    })
})// ou usar {once:true}

container.appendChild(botao)
container.appendChild(ul)



