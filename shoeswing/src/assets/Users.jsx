import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setUsers(data.data)
            })
    }, [])

    return (
        <>
            <ul>
                {
                    users.map((user, index) => {
                        return <UsersList {...user} key={user + index} />
                    })
                }
            </ul>
        </>
    )
}
export default Users;