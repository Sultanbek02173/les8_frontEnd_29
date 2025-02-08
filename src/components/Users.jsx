import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users').
        then(({data}) => {setUsers(data)}).
        catch((error) => console.log(error))
    }, [])
    return (
        <div>
            {
                users &&
                users.map((user) => (
                <div key={user.id}>
                    <Link to={`/detail/${user.id}`}>
                        <h2>{user.name}</h2>
                    </Link>
                </div>
                ))
            }
        </div>
    );
}

export default Users;
