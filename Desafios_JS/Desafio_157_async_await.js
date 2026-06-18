const buscarUsuario = new Promise((resolve, reject) => {
    setTimeout(() => {
        const usuarioExiste = true
        
        if (usuarioExiste) {
            resolve("Usuário encontrado!")
        } else {
            reject("Usuário não encontrado")
        }
    }, 2000)
})

async function executar() {
    try {
        const resultado = await buscarUsuario
        console.log(resultado)

    }
    catch (erro) {
        console.log(erro)
    }
}

executar()