function init(){const cronometro = document.getElementById("cronometro")
const parar = document.getElementById("parar")
const iniciar = document.getElementById("iniciar")
const resetar = document.getElementById("resetar")

if(!cronometro || !parar ||!iniciar ||!resetar){
    console.error("Elementos não encontrados");
    return;
}

let segundos = 0

let intervalo;


function start () {

    if(intervalo) return;

    intervalo = setInterval(() => {
    segundos++

    const segs = segundos % 60
    const minutos = Math.floor(segundos / 60)
    const horas = Math.floor(minutos / 60)
    
    

    cronometro.textContent = `${String(horas).padStart(2,"0")}:${String(minutos).padStart(2,"0")}:${String(segs).padStart(2,"0")}`

},1000)
}

function stop () {
    clearInterval(intervalo)
    intervalo = null
}

function reset () {
    clearInterval(intervalo)
    intervalo = null
    segundos = 0
    cronometro.textContent = "00:00:00"
}

resetar.addEventListener("click", () => {
    reset()
})

iniciar.addEventListener("click", () => {
    start()
})

parar.addEventListener("click", () => {
    stop()
})
}

init()