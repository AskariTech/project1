import React, { useState } from "react";
import axios from "axios";
import "../Style/Login.css";

function EditUser() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updatedUser, setUpdatedUser] = useState(null);
  const [error, setError] = useState(null); // Add error state

  const handleEditUser = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/admin/edit/${userId}`,
        {
          name,
          email,
        }
      );

      setUpdatedUser(response.data);
      setUserId("");
      setName("");
      setEmail("");
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Failed to update user"); // Set an error message
    }
  };

  return (
    <div>
      <div>
        <div className="Display_half">
          <div className="container_login4">
            <div className="profile-container">
              <div className="profile-image">
                <img
                  src={require("../assets/avatar.png")}
                  alt="Profile Image"
                />
              </div>
              <div className="edit-overlay">
                <i className="fas fa-pencil-alt"></i>
              </div>
            </div>
            <div className="white">
              <h2>Edit User</h2>
            </div>
            <div className="Login_form">
              <div className="input_field">
                <input
                  type="text"
                  placeholder="Please Enter User ID"
                  className="input_field2"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  placeholder="Please Enter name"
                  className="input_field2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input_field">
                <input
                  type="email"
                  placeholder="Please Enter Email"
                  className="input_field2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button
              className="btn btn-outline-info mt-4 mb-5"
              onClick={handleEditUser}>Update User</button>
            {
              updatedUser ? (<>
              <h3 className="text-white">Updated User Info</h3>
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
              {updatedUser && (
              
                <tr>
                <td>{updatedUser._id}</td>
                <td>{updatedUser.name}</td>
                <td>{updatedUser.email}</td>
                </tr>
            )} 
              </tbody>
            </table></>):("")
            }
            {/* Display error message */}
            {error && (
              <div className="white">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
