const cache = {}
async function buscarComCache(id) {
    if(cache[id]){
        console.log(`Cache:${cache[id].name}`)
        return
    }
    else{
        try{
            const resultado = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            if(!resultado.ok){
                throw new Error(`Erro ao buscar usuário: ${resultado.status}`)
            }
            const usuario = await resultado.json()
            cache[id] = usuario
            console.log(`API: ${usuario.name}`)
        }
        catch(erro){
            console.log(erro.message)
        }
    }  
}
async function testar() {
    await buscarComCache(1);
    await buscarComCache(2);
    await buscarComCache(2);
    await buscarComCache(1);
    await buscarComCache(3);
}
testar();