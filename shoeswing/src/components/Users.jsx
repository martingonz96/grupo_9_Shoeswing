import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.data);
                setLoading(false);
            })
    }, [])

    return (
        <>
            <ul>
                {
                    loading ?
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                        :
                        users.map((user, index) => {
                            return <UsersList {...user} key={user + index} />
                        })
                }
            </ul>
        </>
    )
}
export default Users;