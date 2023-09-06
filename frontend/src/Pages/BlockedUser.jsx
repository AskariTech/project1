import React, { useEffect, useState } from 'react';

function BlockedUser() {
  const [blockedUsers, setBlockedUsers] = useState([]);

  useEffect(() => {
    fetchBlockedUsers();
  }, []);

  const fetchBlockedUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/admin/get-blocked-users');
      if (response.ok) {
        const data = await response.json();
        setBlockedUsers(data.blockedUsers);
      } else {
        console.error('Failed to fetch blocked users');
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  const unblockUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/admin/unblock-user/${id}`, {
        method: 'PATCH', // Use the PATCH method for updating the user's blocked status
      });
      if (response.ok) {
        alert('User login unblocked successfully');
        setBlockedUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      } else {
        console.error('Failed to unblock user login');
      }
    } catch (error) {
      console.error('Server error:', error);
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
            <p>Blocked Users</p>
          </div>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Want to UnBlock?</th>
              </tr>
            </thead>
            <tbody>
              {blockedUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td><button className="btn btn-outline-success" onClick={() => unblockUser(user._id)}>Unlock</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BlockedUser;
