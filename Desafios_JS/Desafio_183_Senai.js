class Veiculo{
    constructor(fabricante,modelo,ano,tipo,qtdPortas){
        this.fabricante = fabricante // Propriedade da Classe
        this.modelo = modelo // Propriedade da Classe
        this.ano = ano // Propriedade da Classe
        this.tipo = tipo // Propriedade da Classe
        this.qtdPortas = qtdPortas // Propriedade da Classe
    }

    mostrarDadosDoVeiculo()
    {
        console.log(`Fabricante: ${this.fabricante} Modelo: ${this.modelo} Ano: ${this.ano} (${this.tipo}), ${this.qtdPortas} portas`)
    }
    mostrarModelo(){
        console.log(`O modelo do carro é ${this.modelo}`)
    }
    acelerar(){
        console.log("Acelerandoooo...")
    }
}

class Moto extends Veiculo {
    constructor(fabricante,modelo,ano,cilindradas){
        super(fabricante,modelo,ano)
        this.cilindradas = cilindradas

    }

    mostrarDadosDoVeiculo()
    {
        console.log(`Fabricante: ${this.fabricante} Moledo: ${this.modelo} Ano: ${this.ano} Potencia: ${this.cilindradas} cilindradas`)
    }
}

class Carro extends Veiculo {
     constructor(fabricante,modelo,ano,tipo,qtdPortas){
        super(fabricante,modelo,ano,tipo,qtdPortas)
    }
}


const meuCarro = new Carro("Ford","KA","2008","Hatch",4)
const minhaMoto = new Moto("Kavazaki","ss1000","2026",300)

minhaMoto.mostrarDadosDoVeiculo()
meuCarro.mostrarDadosDoVeiculo()
meuCarro.mostrarModelo()
meuCarro.acelerar()