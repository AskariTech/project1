import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Deposit = () => {
    const [userId, setUserId] = useState('');
    const [balanceToAdd, setBalanceToAdd] = useState('');
    const [message, setMessage] = useState('');

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handleBalanceChange = (event) => {
        setBalanceToAdd(event.target.value);
    };

    const handleDeposit = async () => {
        window.location.href = 'https://www.cognitoforms.com/UNIVERALSTUDIO/WITHDRAWAL';
        // try {
        //     const balanceToAddAsNumber = parseFloat(balanceToAdd);

        //     if (isNaN(balanceToAddAsNumber)) {
        //         setMessage('Please enter a valid numeric balance.');
        //         return;
        //     }

        //     const response = await axios.patch(`http://localhost:5000/api/v1/admin/add-user-balance/${userId}`, {
        //         balanceToAdd: balanceToAddAsNumber,
        //     });

        //     if (response.data.message) {
        //         alert(response.data.message);
        //         setUserId("");
        //         setBalanceToAdd("");
        //     }
        // } catch (error) {
        //     setMessage('Failed to add balance. Please try again.');
        // }
    };


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
        <div className='Display_half'>
            <div className="container_login5 ">
                <div className='stickyhead'>
                    <div className='head1'>
                        <i className="fas fa-caret-left"></i>
                    </div>
                    <div className='head2'>
                        Deposit
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className='balance'>Account Available Balance</div>
                    <div className='zero'>$ 
                                        <td>{users.balance}</td>
                                        
                                    </div>
                </div>

                <div className='select'>
                    Please Select A Deposit Method:
                </div>
                <div className='select1'>
                    Deposit Amount
                </div>
                <div className='center'>
                    <div className='inputbtn'>
                        <div className='intb'>
                            <div className='tinp ' >
                                {/* User ID */}
                            </div>
                            <div className='inpsec '>
                                <input
                                    type='text'
                                    placeholder='Enter User ID'
                                    className='maininput'
                                    value={userId}
                                    onChange={handleUserIdChange}
                                />
                            </div>
                        </div>
                        <div className='intb'>
                            <div className='tinp ' >
                                {/* Amount */}
                            </div>
                            <div className='inpsec '>
                                <input
                                    type='text'
                                    placeholder='Enter Deposit Amount'
                                    className='maininput'
                                    value={balanceToAdd}
                                    onChange={handleBalanceChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='select2'>
                    Deposit Description
                </div>
                <div className='btncont'>
                    <div className='dip1' onClick={handleDeposit}>
                        Deposit now
                    </div>
                    <div className='with1'>
                        <Link to="/Customer" style={{ textDecoration: 'none', color: 'white' }}>Customer service</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deposit;
