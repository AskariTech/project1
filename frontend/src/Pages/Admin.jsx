import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Style/Account.css';

function AdminPanel() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/admin/get-all-users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const toggleBlockUser = async (userId) => {
        try {
            await axios.patch(`/api/admin/users/${userId}/block`);
            fetchUsers();
        } catch (error) {
            console.error('Error toggling user block:', error);
        }
    };

    return (
        <div className='Display_half'>
            <div className='container_login4'>
                <div class='profile-container'>
                    <div class='profile-image'>
                        <img src={require('../assets/avatar.png')} alt='Profile Image' />
                    </div>
                    <div class='edit-overlay'>
                        <i class='fas fa-pencil-alt'></i>
                    </div>
                </div>
                <div className='white'>
                    <p>Admin Panel</p>

                </div>
                <div className='list'>
                    <div className='l1'>

                    </div>
                    <div className='l2'>
                        <Link className="text-white" to="/viewuser"style={{textDecoration:"none"}}>VIEW USER</Link>
                    </div>
                    <div className='l3'>
                        <i class="fas fa-caret-right"></i>
                    </div>
                </div>
                <div className='list'>
                    <div className='l1'>

                    </div>
                    <div className='l2'>
                        <Link className="text-white" to="/block" style={{textDecoration:"none"}}>BLOCK USER</Link>
                    </div>
                    <div className='l3'>
                        <i class="fas fa-caret-right"></i>
                    </div>
                </div>
                <div className='list'>
                    <div className='l1'>

                    </div>
                    <div className='l2'>
                        <Link className="text-white" to="/unblock"style={{textDecoration:"none"}}>UNBLOCK USER</Link>
                    </div>
                    <div className='l3'>
                        <i class="fas fa-caret-right"style={{textDecoration:"none"}}></i>
                    </div>
                </div>
                
                <div className='list'>
                    <div className='l1'>

                    </div>
                    <div className='l2'>
                        <Link className="text-white" to="/edituser"style={{textDecoration:"none"}}>EDIT USER</Link>
                    </div>
                    <div className='l3'>
                        <i class="fas fa-caret-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminPanel;
