async function buscarUsuario() {
    try{
        
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const dados = await resposta.json()
    console.log(
        `
        Nome: ${dados.name}
        Email: ${dados.email}
        `)
    }
    catch(erro){
        console.log(erro)
    }
}

buscarUsuario()