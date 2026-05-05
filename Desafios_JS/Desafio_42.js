async function consultarCep() {
    // 1. O Pedido
    const resposta = await fetch("https://viacep.com.br/ws/88106300/json/");
    
    // 2. A Tradução (transformar o texto do servidor em objeto JS)
    const dados = await resposta.json();
    
    // 3. Mostrar o resultado
    console.log(dados);
}

consultarCep();