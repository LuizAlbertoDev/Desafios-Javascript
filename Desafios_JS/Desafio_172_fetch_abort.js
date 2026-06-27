let controller;
async function buscar(id) {
    
    if(controller){
        controller.abort()
    }
    controller = new AbortController()

    try{
        const resultado = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{signal:controller.signal})

        if(!resultado.ok){
            throw new Error(`Erro: ${resultado.status}`)
        }

        const dados = await resultado.json()
        console.log(dados.name)
    
    }
    catch(erro){
        if(erro.name === "AbortError"){
            
        }
        else{
            console.log(erro.message)
        }
    }
}
buscar(1)
buscar(2)
buscar(3)