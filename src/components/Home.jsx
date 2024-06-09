import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext'; 

const Home = () => {
    const [users, setUsers] = useState([]);
    const { token } = useContext(AuthContext); 

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users', {
                    headers: {
                        "x-access-token": token?.token,
                    },
                    withCredentials: true
                });
                setUsers(response.data);
            } catch (error) {
                console.error(error.response?.data?.msg || 'An error occurred');
            }
        };

        getUsers();
    }, [token]);

    return (
        <>
            <h2>Home</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h3>{user.lastName}</h3>
                    <h3>{user.email}</h3>
                </div>
            ))}
        </>
    );
};

export default Home;
