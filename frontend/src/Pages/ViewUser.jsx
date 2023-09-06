import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/admin/get-all-users');
            setUsers(users => response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    return (

        <div>
            <div className='Display_half'>
                <div className='container_login4'>
                    <div className='profile-container'>
                        <div className='profile-image'>
                            <img src={require('../assets/avatar.png')} alt='Profile Image' />
                        </div>
                        <div className='edit-overlay'>
                            <i className='fas fa-pencil-alt'></i>
                        </div>
                    </div>
                    <div className='white'>
                        <p>View User</p>
                    </div>
           
                    <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Balance</th>
                                    <th>Email</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.users?.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.balance}</td>
                                        <td>{user.email}</td>
                                        <td>{user.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>
        </div>

    );
}
export default ViewUsers;
