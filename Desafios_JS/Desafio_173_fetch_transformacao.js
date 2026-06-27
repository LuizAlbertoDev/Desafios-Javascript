async function buscar() {
    try{

        const resultado = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`)

        if(!resultado.ok){
            throw new Error(`Erro: ${resultado.status}`)
        }

        const usuario = await resultado.json()
        
        const novosUsuarios = usuario.map(usuario => {
            return {
                nome: usuario.name,
                email: usuario.email,
                endereco: usuario.address.city
            }
        })

        console.log(novosUsuarios)

    }
    catch(erro){
        console.log(erro.message)
    }
}
buscar()