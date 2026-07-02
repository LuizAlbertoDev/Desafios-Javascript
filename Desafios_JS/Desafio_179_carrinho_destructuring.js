const carrinho = [
    { nome: "Teclado", preco: 150, categoria: "Eletrônicos" },
    { nome: "Mouse", preco: 50, categoria: "Eletrônicos" },
    { nome: "Cabo HDMI", preco: 30, categoria: "Acessórios" }
];

const {nome,preco} = carrinho

function adicionarProduto(carrinhoAtual, novoProduto){
    return [...carrinhoAtual, novoProduto]
}

const novoProduto = {
    nome: "Monitor",
    preco: 800,
    categoria: "Eletrônicos"
}

const novoCarrinho = adicionarProduto(carrinho, novoProduto)

console.log("Carrinho Original: ")
console.log(carrinho)

console.log("Novo Carrinho: ")
console.log(novoCarrinho)

