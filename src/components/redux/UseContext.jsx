import React, { useContext } from 'react'

const appContext = React.createContext();

export default function UseContext() {
    return (
        <>
            <div>UseContext</div>
            <appContext.Provider value={{ name: 'Sara' }}>
                <Hello />
            </appContext.Provider>
        </>
    )
}

function Hello() {
    return (
        <>
            <div>Hello</div>
            <Greetings />
        </>
    )
}

function Greetings() {

    const context = useContext(appContext);

    return (
        <>
            <div>Greetings</div>
            <p>O nome recebido é: {context.name}</p>
        </>
    )
}