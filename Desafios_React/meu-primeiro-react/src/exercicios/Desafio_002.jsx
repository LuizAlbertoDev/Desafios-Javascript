function Card({name,age,city}){
    return <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
    </div>
}

function App(){
    return <div>
       <Card name = "Matheus" age = {58} city = "Florianópolis" /> 
       <Card name = "Stefani" age = {27} city = "Florianópolis" />     
       <Card name = "Luiz" age = {25} city = "Florianópolis" />     
    </div>
}

export default App