import React, { useState } from 'react';
import axios from 'axios';
import "../Style/Withdrawal.css";
const Withdrawal = () => {
    const [userId, setUserId] = useState('');
    const [balanceToSubtract, setBalanceToSubtract] = useState('');
    const [message, setMessage] = useState('');

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handleBalanceChange = (event) => {
        setBalanceToSubtract(event.target.value);
    };

    const handleWithdrawal = async () => {
        try {
            const balanceToSubtractAsNumber = parseFloat(balanceToSubtract);

            if (isNaN(balanceToSubtractAsNumber)) {
                setMessage('Please enter a valid numeric balance to withdraw.');
                return;
            }

            const response = await axios.patch(`http://localhost:5000/api/v1/admin/subtract-user-balance/${userId}`, {
                balanceToSubtract: balanceToSubtractAsNumber,
            });

            if (response.data.message) {
                alert(response.data.message);
                setUserId("");
                setBalanceToSubtract("");
            }
        } catch (error) {
            setMessage('Failed to withdraw balance. Please try again.');
        }
    };

    return (
        <div className='Display_half'>
            <div className="container_login6 ">
                <div className='stickyhead'>
                    <div className='head1'>
                        <i className="fas fa-caret-left"></i>
                    </div>
                    <div className='head2'>
                        Withdrawal
                    </div>
                </div>
                <div className='select1'>
                    Collection Address
                </div>
                <div className='select1'>
                    Withdrawal address
                </div>
                <div className='select1'>
                    Withdrawal Amount
                </div>
                <div className='center' style={{ flexDirection: 'column' }}>
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
                                    placeholder='Enter Withdrawal Amount'
                                    className='maininput'
                                    value={balanceToSubtract}
                                    onChange={handleBalanceChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='select22'>
                    Balance: $0.00
                </div>
                <div className='center'>
                    <div className='prize'>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className='balance'>Service charge</div>
                            <div className='zero'>$0.00</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className='balance'>Actual Amount Received</div>
                            <div className='zero'>$0.00</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className='balance'>Balance</div>
                            <div className='zero'>$0.00</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className='balance'>Minimum Withdrawal</div>
                            <div className='zero'>$0.00</div>
                        </div>
                    </div>
                </div>
                <div className='select22'>
                    Tips:
                </div>
                <div className='center'>
                    <div className='tipbtn' onClick={handleWithdrawal}>
                        Withdraw Now
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Withdrawal;
