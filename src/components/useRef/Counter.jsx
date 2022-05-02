import { useRef, useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(1);

    const ref = useRef(1);

    const incCounter = () => setCount(c => c + 1);

    const incRef = () => ref.current++;

    return (
        <section>
            <button onClick={incCounter}>Count: {count}</button>
            <br />
            <button onClick={incRef}>Ref: {ref.current}</button>
        </section>
    )
}