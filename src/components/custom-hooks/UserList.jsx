import useFetch from '../../hooks/useFetch'

export default function UserList() {

    /* const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then( data => setUsers(data))
            .catch(console.log('occorreu um erro'));
    }, []); */


    const { data: users = [], status, error } = useFetch('http://localhost:3001/users');
    console.log(status);


    if (users.length > 0) {
        return (
            <ul>
                {
                    users.map(u => <li key={u.id}>{u.name}</li>)
                }
            </ul>
        )
    }

    return <p>{status}</p>

}
