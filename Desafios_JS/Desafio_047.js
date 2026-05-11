const produtos = [
    { nome: "Teclado", preco: 150, categoria: "Eletrônicos" },
    { nome: "Mouse", preco: 80, categoria: "Eletrônicos" },
    { nome: "Cadeira", preco: 500, categoria: "Móveis" },
    { nome: "Fone", preco: 200, categoria: "Eletrônicos" }
];

const eletronicos = produtos.filter(p => p.categoria === "Eletrônicos")

const nomesProdutos = produtos.map(p => p.nome)

const somarPrecos = produtos.reduce((acc,atual) => acc + atual.preco,0)


console.log(eletronicos)
console.log(nomesProdutos)
console.log(somarPrecos)