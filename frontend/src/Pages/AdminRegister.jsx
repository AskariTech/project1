import React, { useState } from "react";
import "../Style/Login.css"; // Use the same CSS file for styling
import axios from 'axios';
import { Link } from "react-router-dom";

function AdminRegistration() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('http://localhost:5000/api/v1/auth/admin/register', {
      //   name: user.name,
      //   email: user.email,
      //   phone: user.phone,
      //   password: user.password,
      // }, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      const response = await fetch("http://localhost:5000/api/v1/auth/admin/register", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone,
          password: user.password
          })
        });
        console.log(JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone,
          password: user.password
        }))
        const json = await response.json()
        console.log(json);
      if (json.sucess) {
        // Registration was successful
        alert("Registration successful!");
        localStorage.setItem("userid",user.email)
        localStorage.setItem("authToken",json.authToken)
        // You can add navigation logic or other actions here
        window.location.href = '/login'; // Replace with the actual URL of your account page
      } else {
        // Registration failed
        alert("Registration failed. Please check your information and try again.");
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  }

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  return (
    <div className="Display_half">
      <div className="container_login">
        <div className="Header_login">
          <p className="white">Register a new account</p>
          <img src={require("../assets/call.png")} height={30} alt="language" />
          <p className="white">English</p>
        </div>
        <img src={require("../assets/logo.jpg")} height={100} alt="Cineworld logo" />
        <div className="text-white">ADMIN REGISTER</div>
        <div className="Login_form">
          <div className="input_field">
            <input
              type="text"
              placeholder="Please Enter your Name"
              className="input_field2"
              name="name"
              value={user.name}
              onChange={onChange}
            />
          </div>
          <div className="input_field">
            <input
              type="email"
              placeholder="Please Enter your Email"
              className="input_field2"
              name="email"
              value={user.email}
              onChange={onChange}
            />
          </div>
          <div className="input_field">
            <input
              type="text"
              placeholder="Please Enter your Phone number"
              className="input_field2"
              name="phone"
              value={user.phone}
              onChange={onChange}
            />
          </div>
          <div className="input_field">
            <input
              type="password"
              placeholder="Please Enter Password"
              className="input_field2"
              name="password"
              value={user.password}
              onChange={onChange}
            />
          </div>
          <button className="btn_login" onClick={handleRegistration}>Register</button>
          <div className="text_Content">
          <Link to="/adminlogin"className="red_white">Already have an account? Log in</Link>
          {/* <p className="red_white">Already have an account? Log in</p> */}
            {/* <p className="white_white">Forgot Password?</p> */}
            </div>

          <div className="text_Content">
            <Link to="/login"className="red_white">Already have an account? Log in</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRegistration;
