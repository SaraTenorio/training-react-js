import React, { useEffect, useState } from "react";

export default function WindowResize() {

    const [size, setSize] = useState(getSize());

    function getSize() {
        return {
            with: window.innerWidth,
            heigth: window.innerHeight
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize, false);

        function handleResize() {
            setSize(getSize());
        }

        return () => window.removeEventListener('resize', handleResize, false); // metodo de cleanup do event listener, para nao ficar o processo quando o componente sai
    }, []); //array de dependencias, substituir componentDidMount()

    return (
        <section>
            <h2>Width: {size.with}</h2>
            <h2>Heigth: {size.heigth}</h2>
        </section>
    )
}