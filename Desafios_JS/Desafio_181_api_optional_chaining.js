const usuarios = [
    { nome: "Ana", empresa: { nome: "TechCorp", cidade: "SP" } },
    { nome: "Beto" },
    { nome: "Carlos", empresa: { nome: "DevHouse" } }
];

usuarios.forEach(usuario => {
    const empresa = usuario.empresa?.nome
    const cidade = usuario.empresa?.cidade ?? "não informado"
    const nome = usuario.nome

    if(empresa){
        console.log(`Usuario: ${nome} trabalha na ${empresa}, localizada em ${cidade}`)
    }

    else{
        console.log(`Usuario: ${nome},Não possuir empresa Cadastrada`)
    }
})