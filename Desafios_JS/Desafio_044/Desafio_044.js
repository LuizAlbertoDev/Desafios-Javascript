const inputCep = document.getElementById("inputCep")
const lista = document.getElementById("lista")
const botao = document.getElementById("buscarEndereço")

botao.addEventListener("click", buscarEndereco)

async function buscarEndereco() {
    const cep = inputCep.value.trim()
    if (!cep) return alert("Digite um CEP")

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        
        // Se a internet cair ou a URL estiver errada, o código pula direto para o catch
        const dados = await resposta.json()

        if (dados.erro) {
            lista.innerHTML = "<li>CEP não encontrado</li>"
            return
        }

        desenhar(dados)
    } catch (error) {
        // Esse bloco roda se houver erro de rede/internet
        console.error("Erro na requisição:", error)
        lista.innerHTML = "<li>Erro ao conectar com o serviço. Verifique sua internet.</li>"
    }
}

function desenhar(dados) {
    lista.innerHTML = ""

    const li = document.createElement("li")

    li.innerHTML = `
        CEP: ${dados.cep} <br>
        Rua: ${dados.logradouro} <br>
        Bairro: ${dados.bairro} <br>
        Cidade: ${dados.localidade} <br>
        Estado: ${dados.uf}
    `

    lista.appendChild(li)
}