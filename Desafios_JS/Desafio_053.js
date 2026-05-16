const estoque = [
  { nome: "Teclado Mecânico", preco: 180, qtd: 15 },
  { nome: "Mouse Gamer", preco: 120, qtd: 0 },
  { nome: "Monitor 24'", preco: 900, qtd: 8 },
  { nome: "Fone de Ouvido", preco: 75, qtd: 3 }
];

// Filtra os disponíveis 
const obterDisponiveis = lista => lista.filter(item => item.qtd > 0);

// Calcula o valor total do estoque (Preço x Qtd)
function exibirValorTotalEstoque(lista) {
    const total = lista.reduce((acc, produto) => acc + (produto.preco * produto.qtd), 0);
    
    console.log(`Valor total do estoque: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
}

const produtosDisponiveis = obterDisponiveis(estoque);

console.log("Produtos Disponíveis:\n", produtosDisponiveis);
exibirValorTotalEstoque(produtosDisponiveis);