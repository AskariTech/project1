import React, { useState } from 'react';
import axios from 'axios';
const AddPoints = () => {
    const [userId, setUserId] = useState('');
    const [pointsToAdd, setPointsToAdd] = useState('');
    const [message, setMessage] = useState('');

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handlePointsChange = (event) => {
        setPointsToAdd(event.target.value);
    };

    const handleAddPoints = async () => {
        try {
            const pointsToAddAsNumber = parseInt(pointsToAdd);

            if (isNaN(pointsToAddAsNumber)) {
                setMessage('Please enter a valid numeric value for points.');
                return;
            }

            const response = await axios.patch(`http://localhost:5000/api/v1/admin/add-user-points/${userId}`, {
                pointsToAdd: pointsToAddAsNumber,
            });

            if (response.data.message) {
                alert(response.data.message);
            }
        } catch (error) {
            setMessage('Failed to add points. Please try again.');
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
                                <h2>Add Points to User</h2>
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
                                    placeholder='Enter Points to Add'
                                    type="text"
                                    value={pointsToAdd}
                                    onChange={handlePointsChange} className="input_field2"
                                />
                            </div>

                            <button className="btn btn-outline-danger mt-5" onClick={handleAddPoints}>Add Points</button>
                        </div>

                    </div>
                </div>
            </>

        </div>
    );
};

export default AddPoints;
