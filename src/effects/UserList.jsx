import { useEffect, useState } from 'react'

export default function UserList() {

    const [users, setusers] = useState([]);

    /* first option */
    // useEffect(() => {
    //     fetch('http://localhost:3001/users')
    //         .then(response => response.json())
    //         //.then(data => console.log(data))
    //         .then(data => setusers(data))
    //         .catch(err => console.log(err));
    // }, []);

    /* second option */
    useEffect(() => {
        //IIFE - imediate invoke function expression
        (async () => {
            try {
                let response = await fetch('http://localhost:3001/users');
                let data = await response.json();
                setusers(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    if (users.length > 0) {
        return (
            <ul>
                {
                    users.map(u => (
                        <li key={u.id}>{u.name}</li>
                    ))
                }
            </ul>
        )
    }

    return (
        <div>Loading...</div>
    )
}