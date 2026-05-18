function Saudacao ({nome}){
    return <h1>Olá, {nome}</h1>
}

function App(){
    return (
        <div>
            <Saudacao nome = "Luiz"/>
            <Saudacao nome = "Maria"/>
            <Saudacao nome = "João"/>
        </div>
    )
}

export default App
