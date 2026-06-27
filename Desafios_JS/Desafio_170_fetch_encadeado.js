async function buscador(id) {
    
    try{

        const resultado1 = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if(!resultado1.ok){
            throw new Error(`Erro ao buscar usuário: ${resultado1.status}`)
        }
        const resultado2 = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

        if(!resultado2.ok){
            throw new Error(`Erro ao buscar usuário: ${resultado2.status}`)
        }
        
        const dados1 = await resultado1.json()
        const dados2 = await resultado2.json()

        console.log(dados1.name)
        console.log(dados2[0].title)
        
    }
    catch(erro){
        console.log(erro.message)
    }

}

buscador(1)