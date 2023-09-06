import React, { useState, useEffect } from 'react';
import "../Style/CustomerService.css";
import { Link } from 'react-router-dom';


const Customer = () => {
  return (
    <div className='Display_half'>
      <div className="container_login5 ">
        <div className='stickyhead'>
          <div className='head1'>
            <i class="fas fa-caret-left"></i>
          </div>
          <div className='head2'>
            Customer Service
          </div>
        </div>
        <div className='gridsocial'>
          <div className='social'>
            <img
              src={require("../assets/whatsapp.png")}
              className='socialimg'
            />
            <p>Whatsapp</p>
          </div>
          <div className='social'>
            <img
              src={require("../assets/telegram.png")}
              className='socialimg'
            />
            <p>Telegram</p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Customer;
