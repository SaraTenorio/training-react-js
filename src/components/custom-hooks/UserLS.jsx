import { useEffect, useState } from 'react'

export default function UserLS() {

    const [user, setUser] = useState('Maria');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(storedUser);
        }
        console.log('sem dependencias')
    }, []); // componentDidMount


    useEffect(() => {
        localStorage.setItem("user", user);
        console.log('COM dependencias')
    }, [user])

    return (
        <div>
            <select value={user} onChange={(e) => setUser(e.target.value)}>
                <option>Joao</option>
                <option>Jose</option>
                <option>Maria</option>
                <option>Ana</option>
            </select>
        </div>
    )
}
