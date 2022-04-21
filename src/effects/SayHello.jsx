import React, { useEffect, useState } from 'react'

export default function SayHello() {
    const greetings = ['Hola', 'Bom Dia', 'Bonjour', 'Good Morning', 'Aloha'];

    const [index, setIndex] = useState(0);

    useEffect(
        () => {
            document.title = greetings[index];
        }
    );

    const updateGreetings = () => setIndex(Math.floor(Math.random() * greetings.length));

    return (
        <section>
            <p>SayHello: {greetings[index]}</p>
            <button onClick={updateGreetings}>Say Hello</button>
        </section>
    )
}