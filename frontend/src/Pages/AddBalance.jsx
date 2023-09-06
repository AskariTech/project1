import React, { useState } from 'react';
import axios from 'axios';

const AddBalance = () => {
    const [userId, setUserId] = useState('');
    const [balanceToAdd, setBalanceToAdd] = useState('');
    const [message, setMessage] = useState('');

    const handleUserIdChange = (event) => {
        console.log(userId)
        setUserId(event.target.value);
    };

    const handleBalanceChange = (event) => {
        console.log(balanceToAdd)
        setBalanceToAdd(event.target.value);
    };

    const handleAddBalance = async () => {
        try {
            const balanceToAddAsNumber = parseFloat(balanceToAdd);

            if (isNaN(balanceToAddAsNumber)) {
                setMessage('Please enter a valid numeric balance.');
                return;
            }

            const response = await axios.patch(`http://localhost:5000/api/v1/admin/add-user-balance/${userId}`, {
                balanceToAdd: balanceToAddAsNumber,
            });

            if (response.data.message) {
                alert(response.data.message)
                // setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('Failed to add balance. Please try again.');
        }
    };


    return (
        <div>
            <>
                <div className='Display_half'>
                    <div className="container_login5 ">
                        <div className='stickyhead'>
                            <div className='head1'>
                                <i class="fas fa-caret-left"></i>
                            </div>
                            <div className='head2'>
                                <h2>Add Balance to User</h2>
                            </div>
                        </div>

                        <div className="about-us mt-5">

                            <div className="input_field">
                                {/* <label>User ID:</label> */}
                                <input
                                    placeholder='Enter User ID'
                                    type="text"
                                    value={userId}
                                    onChange={handleUserIdChange} className="input_field2"
                                />
                            </div>
                            <div className="input_field">
                                {/* <label>User ID:</label> */}
                                <input
                                    placeholder='Enter Balance to Add'
                                    type="text"
                                    value={balanceToAdd}
                                    onChange={handleBalanceChange} className="input_field2"
                                />
                            </div>




                            {/* <div>
                                <label>Balance to Add:</label>
                                <input
                                    value={balanceToAdd}
                                    onChange={handleBalanceChange}
                                />
                            </div> */}
                            <button class="btn btn-outline-danger mt-5" onClick={handleAddBalance}>Add Balance</button>
                            {/* <p>{message}</p> */}
                        </div>

                    </div>
                </div>
            </>

        </div>
    );
};

export default AddBalance;
