import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
    const [user, setUser] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(({data}) => {setUser(data)})
        .catch((error) => console.log(error))
    }, [id]);
    return (
        <div>
            <h1>User</h1>
            <h2>{user?.name}</h2>
            <h2>{user?.username}</h2>
            <h2>{user?.phone}</h2>
            <h2>{user?.company?.name}</h2>
            <h2>{user?.website}</h2>
            <h2>{user?.email}</h2>
        </div>
    );
}

export default UserDetail;
