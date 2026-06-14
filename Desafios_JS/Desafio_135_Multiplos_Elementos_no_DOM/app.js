const container = document.getElementById("container");
const textos = [
  "Parágrafo 1",
  "Parágrafo 2",
  "Parágrafo 3"
]

const h1 = document.createElement("h1");
h1.textContent = "Titulo"

container.appendChild(h1)

textos.forEach(texto => {
    const p = document.createElement("p")
    p.textContent = texto
    container.appendChild(p)
})






