const botoes = [
    { id: "btn-vermelho", cor: "red" },
    { id: "btn-azul", cor: "blue" },
    { id: "btn-verde", cor: "green" },
    { id: "reset", cor: "white" }
]

botoes.forEach(item =>{
    document.getElementById(item.id).addEventListener("click",function(){
        document.body.style.backgroundColor = item.cor
    })
})