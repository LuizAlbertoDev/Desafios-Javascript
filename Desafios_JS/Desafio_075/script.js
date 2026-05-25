const botao = document.getElementById("btn-tema")

botao.addEventListener("click", function(){
    document.body.classList.toggle("dark")
})

const hora = new Date().getHours()

function saudacao(nome){
    return `Olá,${nome}!, Bem vindo ao meu site`
}

function periodoDoDia(){
    if(hora < 12){
        return "Bom Dia!"
    }
    else if (hora < 18){
        return "Boa Tarde!"
    }
    else{
        return "Boa Noite!"
    }
}

console.log(saudacao("luiz"))
console.log(periodoDoDia())