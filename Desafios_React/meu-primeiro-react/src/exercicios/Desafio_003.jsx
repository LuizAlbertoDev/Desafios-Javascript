function Button({text}){
    return <button>{text}</button>
}

function App(){
    return <div>
        <Button text = "Save"/>    
        <Button text = "Cancel"/>
        <Button text = "Edit"/>
        <Button text = "Delete"/>        
    </div>

}

export default App