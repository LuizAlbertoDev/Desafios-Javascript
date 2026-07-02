const pedidos = [
    {
        id: 1,
        cliente: { nome: "Luiz", endereco: { cidade: "São José", estado: "SC" } },
        itens: [
            { produto: "Teclado", preco: 150 },
            { produto: "Mouse", preco: 50 }
        ]
    },
    {
        id: 2,
        cliente: { nome: "Ana" },
        itens: [
            { produto: "Monitor", preco: 900 }
        ]
    },
    {
        id: 3,
        cliente: { nome: "Beto", endereco: { cidade: "Florianópolis" } },
        itens: [
            { produto: "Cabo HDMI", preco: 30 },
            { produto: "Webcam", preco: 220 },
            { produto: "Headset", preco: 180 }
        ]
    }
];

pedidos.forEach(pedido => {
    const id = pedido?.id ?? "ID não informado"
    const clienteNome = pedido?.cliente?.nome ?? "Nome do cliente não informado"
    const clienteCidade = pedido?.cliente?.endereco?.cidade ?? "Cidade do cliente não informada"
    const clienteEstado = pedido?.cliente?.endereco?.estado ?? "Estado do cliente não informado"
    const itens = pedido?.itens ?? []
    const total = itens.reduce((acc,item) => acc +item.preco,0)
    console.log(`Pedido #${id} - Cliente: ${clienteNome} - Cidade: ${clienteCidade} - Estado: ${clienteEstado} - Total: R$ ${total}`)
})

function adicionarItem(pedido, novoItem) {
    return {
        ...pedido,
        itens: [...pedido.itens, novoItem]
    };
}

console.log("Pedido original:");
console.log(pedidos[1]);

const pedido2Atualizado = adicionarItem(
    pedidos[1],
    { produto: "Cadeira", preco: 350 }
);

console.log("Novo pedido:");
console.log(pedido2Atualizado);



