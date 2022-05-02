import { useState, useEffect } from 'react'

export default function WindowResize() {

    const [size, setSize] = useState(getSize());

    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    useEffect(() => {
        function handleResize() {
            setSize(getSize());
        }

        window.addEventListener('resize', handleResize, false);

        return () => window.removeEventListener('resize', handleResize, false);

    }, []); //[] === []
    /* componentDidMount */

    return (
        <div>
            <p> Width: {size.width} <br />
                Height: {size.height}</p>
        </div>
    )
}
