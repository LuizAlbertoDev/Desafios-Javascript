async function buscar() {

    try{

        const [resultado1, resultado2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
            fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json())
        ])

        console.log(resultado1.name)
        console.log(resultado2.title)

    }
    catch(erro){
        console.log(erro.message)
    }
    
}

buscar()