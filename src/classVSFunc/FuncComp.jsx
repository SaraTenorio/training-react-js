import { useState } from "react"

export default function FuncComp() {
    
    const [name, setName] = useState('')

    return (
        <>
        <h2>Functional Component</h2>
        <h3>O meu nome: {name} </h3>
        
        <input type='text'
        value={name} 
        onChange={(e) => setName(e.target.value)} />
        </>
    )
}