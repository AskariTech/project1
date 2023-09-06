import React, { useState,useEffect } from "react";
import "../Style/Login.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import {auth,provider,provider2} from './config.js'
import {signInWithPopup} from "firebase/auth";
import Account from './Account'

function MyVerticallyCenteredModal(props) {
  // ... (Your modal code)
}

function Login() {
  const [value,setValue] = useState('')
  const handleClickGoogle =()=>{
      signInWithPopup(auth,provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
      })
  }
  const handleClickFacebook =()=>{
    signInWithPopup(auth,provider2).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
    })
}

  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })



  const [credential, setCredential] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5002/api/v1/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      })
    });
    const json = await response.json();
    console.log(json);

    
    if (json.message === 'Logged in') {
      const data = {
        id:json.user._id,
        comm: json.user.commRate,
        balance:json.user.balance,
        name:json.user.name,
        blocked:json.user.blocked,
        VIP:json.user.VIP,
        email:json.user.email,
        phone:json.user.phone,
        ticketBought:json.user.ticketsBought
      }
   
     const userData = localStorage.setItem('userData',JSON.stringify(data));
      console.log('success');
      alert("login successful!");
      window.location.href = '/account'; 
    } else {
      alert("login failed. Please check your information and try again.");
      console.log('failed');
    }
  }

  const onChange = (event) => {
    setCredential({ ...credential, [event.target.name]: event.target.value })
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
   <>
   { value?<Account/> : (
     <div className="Display_half">
     <div className="container_login">
       <MyVerticallyCenteredModal
         show={modalShow}
         onHide={() => setModalShow(false)}
       />
       
       <div className="Header_login">
         <p className="white">Hi, welcome to Cineworld!</p>
         <img src={require("../assets/call.png")} height={30} />
         <p className="white">English</p>
       </div>
       <img src={require("../assets/logo.jpg")} height={100} />
       <div className="text-white">USER LOGIN</div>
       <div className="Login_form">
         <img src={require("../assets/number.png")} height={20} />
         <div className="input_field">
           <input
             placeholder="Please Enter email Number"
             className="input_field2" name="email" value={credential.email} onChange={onChange}
           />
         </div>
         <img src={require("../assets/lock.png")} height={20} />
         <div className="input_field">
           <input placeholder="Please Enter Password" className="input_field2" type="password" name="password" value={credential.password} onChange={onChange} />
         </div>
         <button className="btn_login" onClick={handleLogin}>Login</button>
         <div className="text_Content">
           <Link to="/register" className="red_white">No Account? Register Here</Link>
         </div>
        
         <div
           data-v-3b24c884=""
           className="fb_button"
           loading-text="Continue with Facebook" onClick={handleClickFacebook}
         ></div>

         <div
           data-v-3b24c884=""
           className="gg_button"
           loading-text="Continue with Google" onClick={handleClickGoogle}
         ></div>
       </div>
     </div>
   </div>
   )}


   </>
  );
}

export default Login;
