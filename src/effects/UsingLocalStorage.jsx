import React, { useEffect, useState } from 'react'

export default function UsingLocalStorage() {

    const [user, setUser] = useState('');

    useEffect(() => {
        const storedUser = window.localStorage.getItem('user');

        if (storedUser) {
            setUser(storedUser);
        }
    }, []); // somente no primeiro render, é como o componet didMount

    useEffect(() => {
        window.localStorage.setItem('user', user);
    }, [user]); // executado cada vez que o state "user" for atualizado

    return (
        <div>
            <select value={user} onChange={e => setUser(e.target.value)}>
                <option>Hosana</option>
                <option>Beatriz</option>
                <option>Ana</option>
                <option>Sara</option>
                <option>Amanda</option>
                <option>Renata</option>
            </select>
        </div>
    )
}