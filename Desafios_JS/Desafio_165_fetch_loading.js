async function buscarUsuario(id) {
    console.log("Carregando...");

        try {
            const resultado = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

            if (!resultado.ok) {
                throw new Error("Erro: usuário não encontrado");
            }

            const usuario = await resultado.json();
            console.log(usuario.name);
            console.log(usuario.email);

            console.log("Concluido!")

        } catch (erro) {
            console.log(erro.message);
        }
}

buscarUsuario(2);