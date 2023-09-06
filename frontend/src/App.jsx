import "./App.css";
import React, { useState, useEffect } from "react";
import Events from "./Pages/Events";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Pages/Register'
import Account from "./Pages/Account";
import Ticket1 from "./Pages/Ticket";
import Deposit from "./Pages/Deposit";
import Withdrawal from "./Pages/Withdrawal";
import Customer from "./Pages/CustomerService";
import AccountDetails from "./Pages/AcountDetails";
import BlockedUser from './Pages/BlockedUser';
import UnBlockedUser from './Pages/UnBlockedUser';
import Admin from "./Pages/Admin";
import ViewUser from "./Pages/ViewUser"
import EditUser from "./Pages/EditUsre";
import About from "./Pages/About";
import Setting from "./Pages/Setting";
import Helpcenter from "./Pages/Helpcenter";
import BlindWallet from "./Pages/BlindWallet"
import Vip from "./Pages/Vip";
import AddBalance from "./Pages/AddBalance";
import SubtractBalance from "./Pages/SubtractBalance";
import SubtractPoint from "./Pages/SubtractPoint";
import AddPoints from "./Pages/AddPoints";
import Record from "./Pages/Record";
import AdminRegister from './Pages/AdminRegister'
import AdminLogin from './Pages/AdminLogin';
// import SubWindow1 from "./Pages/Subwindow1";
// import SubWindow from "./Pages/Subwindw";
// import SubWindow1 from "./Pages/Subwindow1";

// import EditUser from "./Pages/EditUsre";
function App() {
  return (
    <>
    
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element ={ <Admin/>}/>
      <Route path="/viewUser" element ={ <ViewUser/>}/>
      <Route path="/addbalance" element={<AddBalance />} /> 
      <Route path="/subbalance" element={<SubtractBalance />} /> 
      <Route path="/addpoint" element={<AddPoints />} /> 
      <Route path="/subPoint" element={<SubtractPoint />} /> 

      <Route path="/adminregister" element={<AdminRegister />} /> 
      <Route path="/adminlogin" element={<AdminLogin />} /> 

      <Route path="/record" element={<Record />} /> 


      <Route path="/block" element ={ <BlockedUser/>}/>
      <Route path="/unblock" element ={ <UnBlockedUser/>}/>
      <Route path="/edituser" element ={ <EditUser/>}/>
      <Route path="/events" element={<Events />} />
      <Route path="/ticket" element={<Ticket1 />} />
      <Route path="/account" element={<Account/>} /> 
      <Route path="/vip" element={<Vip />} /> 
      <Route path="/accountdetails" element={<AccountDetails />} /> 
      <Route path="/setting" element={<Setting />} /> 
      <Route path="/helpcenter" element={<Helpcenter />} /> 
      <Route path="/blindwallet" element={<BlindWallet />} /> 

      <Route path="/login" element={<Login/>} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/Withdrawal" element={<Withdrawal />} />
      <Route path="/about" element={<About />} />
      <Route path="/Customer" element={<Customer />} />
      <Route path="/register" element={<Register />} />
      <Route path="/AccountDetails" element={<AccountDetails />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  
 
    </>
  

  );
}

export default App;
