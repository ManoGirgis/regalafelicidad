import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = () => {
            axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/users`)
                .then(res => {
                    setUsers(res.data);
                })
                .catch(error => {
                    console.error('Error fetching Users:', error);
                });
        };

        fetchUsers();

        const intervalId = setInterval(fetchUsers, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Userss</h1>
            {user.map(User => (
                <p key={User.id}>{User.name}</p>
            ))}

        </div>
    );
}

export default Users;
