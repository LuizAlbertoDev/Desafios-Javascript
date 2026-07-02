
const produto = { nome: "Mouse", preco: 50, estoque: 10 };

const { nome: nomeUsuario, preco: precoProduto} = produto

console.log(`O produto ${nomeUsuario} custa R$ ${precoProduto.toFixed(2)}`)
