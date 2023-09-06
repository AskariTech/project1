import React, { useEffect, useState } from 'react';

function UnblockedUsers() {
  const [unblockedUsers, setUnblockedUsers] = useState([]);

  useEffect(() => {
    fetchUnblockedUsers();
  }, []);

  const fetchUnblockedUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/admin/get-unblocked-users'); // Replace with your actual backend API endpoint
      if (response.ok) {
        const data = await response.json();
        setUnblockedUsers(data.unblockedUsers);
      } else {
        console.error('Failed to fetch unblocked users');
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  const blockUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/admin/block-user/${id}`, {
        method: 'POST', // Adjust the method as per your API design
      });
      if (response.ok) {
        console.log('User login blocked successfully');
        alert("User blocked")
        setUnblockedUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      } else {
        console.error('Failed to block user login');
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
            <p>Unblocked Users</p>
          </div>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Want to Block?</th>
                </tr>
            </thead>
            <tbody>
                {unblockedUsers.map((user) => (
                  <tr >
                  <td>{user.name}</td>
                  <td><button class="btn btn-outline-danger" onClick={() => blockUser(user._id)}>Block</button></td>
                </tr>
                ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default UnblockedUsers;
