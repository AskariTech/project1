import React, { useState } from 'react';
import axios from 'axios';
export default function SubtractBalance() {
    const [userId, setUserId] = useState('');
    const [balanceToSubtract, setBalanceToSubtract] = useState('');
    const [message, setMessage] = useState('');

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handleBalanceChange = (event) => {
        setBalanceToSubtract(event.target.value);
    };

    const handleSubtractBalance = async () => {
        try {
            const balanceToSubtractAsNumber = parseFloat(balanceToSubtract);

            if (isNaN(balanceToSubtractAsNumber)) {
                setMessage('Please enter a valid numeric balance to subtract.');
                return;
            }

            const response = await axios.patch(`http://localhost:5000/api/v1/admin/subtract-user-balance/${userId}`, {
                balanceToSubtract: balanceToSubtractAsNumber,
            });

            if (response.data.message) {
                alert(response.data.message);
            }
        } catch (error) {
            setMessage('Failed to subtract balance. Please try again.');
        }
    };

    return (
        <div>
            <>
                <div className='Display_half'>
                    <div className="container_login5 ">
                        <div className='stickyhead'>
                            <div className='head1'>
                                <i className="fas fa-caret-left"></i>
                            </div>
                            <div className='head2'>
                                <h2>Subtract Balance from User</h2>
                            </div>
                        </div>

                        <div className="about-us mt-5">

                            <div className="input_field">
                                <input
                                    placeholder='Enter User ID'
                                    type="text"
                                    value={userId}
                                    onChange={handleUserIdChange} className="input_field2"
                                />
                            </div>
                            <div className="input_field">
                                <input
                                    placeholder='Enter Balance to Subtract'
                                    type="text"
                                    value={balanceToSubtract}
                                    onChange={handleBalanceChange} className="input_field2"
                                />
                            </div>

                            <button className="btn btn-outline-danger mt-5" onClick={handleSubtractBalance}>Subtract Balance</button>
                        </div>

                    </div>
                </div>
            </>

        </div>
    );
};
