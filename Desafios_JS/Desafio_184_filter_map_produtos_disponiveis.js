/*
Desafio 184 — Produtos disponíveis com filter e map

Conceitos praticados:
- Arrays de objetos
- filter
- map
- Template strings

Enunciado:
Uma loja possui uma lista de produtos.

Crie uma variável chamada produtosDisponiveis que:
1. mantenha apenas os produtos com estoque maior que zero;
2. transforme cada produto em uma frase no formato:
   "Nome - R$ preço"

Regras:
- Use filter e map, nessa ordem.
- Não altere o array original.
- Exiba o resultado no console.
*/

const produtos = [
    { nome: "Teclado", preco: 120, estoque: 4 },
    { nome: "Mouse", preco: 60, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 2 },
    { nome: "Cabo HDMI", preco: 35, estoque: 8 }
];

// Escreva sua solução abaixo

const produtosDisponiveis = produtos
    .filter(produto => produto.estoque > 0)
    .map(produto => `${produto.nome} - R$ ${produto.preco}`);

console.log(produtosDisponiveis);