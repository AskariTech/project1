import React, { useState, useEffect } from 'react';
import "../Style/Accountdetails.css";
const Tab1Content = () => (
  <div style={{textAlign:'left'}}>
    <div className='box1'>Withdrawal Deduction</div>
    <div className='box1'>get commission</div>
    <div className='box1'>Return of ticket purchase principal (experience)</div>
    <div className='box1'>Ticket purchase principal (experience)</div>
    <div className='box1'>get commission</div>
  </div>
);

const Tab2Content = () => (
  <div style={{textAlign:'left'}}>
   <div className='box1'>get commission</div>
   <div className='box1'>get commission</div>
   <div className='box1'>get commission</div>
  </div>
);

// Add more custom tab components as needed
const Tab3Content = () => (
  <div>
    <div style={{textAlign:'left'}}>
    <div className='box1'>Withdrawal application (pending review)</div>
    </div>
  </div>
);
const Tab4Content = () => (
  <div>
    — No more yet —
  </div>
);


const tabOptions = [
  { id: 1, title: "Wallet", content: <Tab1Content /> },
  { id: 2, title: "Commission", content: <Tab2Content /> },
  { id: 3, title: "Withdraw", content: <Tab3Content /> },
  { id: 4, title: "Recharge", content: <Tab4Content /> },
];


const AccountDetails = () => {

  const [activeTab, setActiveTab] = useState(tabOptions[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='Display_half'>
      <div className="container_login5 ">
        <div className='stickyhead'>
          <div className='head1'>
            <i class="fas fa-caret-left"></i>
          </div>
          <div className='head2'>
            Account Details
          </div>
        </div>
        <div className="App2">

          <div className="tab-container">


            <div className="tab-scrollable">
              <div className="tab" style={{ width: "300px", display: "flex" }}>
                {tabOptions.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-btn ${tab.id === activeTab ? "active" : ""}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="tab-content">
              {tabOptions.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane ${tab.id === activeTab ? "active" : ""}`}
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default AccountDetails;
