function init(){

    const container = document.getElementById("container")

    let nome ="luiz"
    let idade = 32
    let estudante = true

    let n1 = 10
    let n2 = 5

    container.innerHTML = `
        <div>👤 Perfil</div>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Estudante:</strong> ${estudante ? "Sim" : "Não"}</p>
        <p><strong>Somar</strong>: ${n1} + ${n2} = ${n1 + n2}</p>
        <p><strong>Subtrair</strong>: ${n1} - ${n2} = ${n1 - n2}</p>
        <p><strong>Multiplicacao</strong>: ${n1} * ${n2} = ${n1 * n2}</p>
        <p><strong>Divisao</strong>: ${n1} / ${n2} = ${n1 / n2}</p>
    `
    console.log(`${n1} + ${n2} = ${n1 + n2}`)
    console.log(`${n1} - ${n2} = ${n1 - n2}`)
    console.log(`${n1} * ${n2} = ${n1 * n2}`)
    console.log(`${n1} / ${n2} = ${n1 / n2}`)

}

init()