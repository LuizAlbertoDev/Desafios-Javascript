/*
Desafio 185 — Valor total do estoque com reduce

Conceitos praticados:
- Arrays de objetos
- reduce
- Acumulador
- Multiplicação de propriedades

Enunciado:
Uma loja possui uma lista de produtos com preço e quantidade em estoque.

Calcule o valor total de todos os produtos armazenados.

Para cada produto, o valor armazenado é:
preço × estoque

Depois, some os valores de todos os produtos.

Regras:
- Use reduce.
- Não use for, while ou forEach.
- Não altere o array original.
- Armazene o resultado em uma variável chamada valorTotalEstoque.
- Exiba o resultado no console.
*/

const produtos = [
    { nome: "Teclado", preco: 100, estoque: 3 },
    { nome: "Mouse", preco: 50, estoque: 4 },
    { nome: "Monitor", preco: 800, estoque: 2 }
];

// Escreva sua solução abaixo

const valorTotalEstoque = produtos
    .reduce((acumulador,produto) => {
        return acumulador + (produto.preco * produto.estoque)
    },0)

console.log(valorTotalEstoque)