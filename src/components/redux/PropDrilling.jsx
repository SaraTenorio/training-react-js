import React from 'react'

export default function PropDrilling() {
    let name = 'Sara';
    return (
        <>
            <div>PropDrilling</div>
            <Hello name={name} />
        </>
    )
}

function Hello(props) {
    return (
        <>
            <div>Hello</div>
            <Greetings name={props.name} />
        </>
    )
}

function Greetings(props) {
    return (
        <>
            <div>Greetings</div>
            <p>O nome recebido é: {props.name}</p>
        </>
    )
}