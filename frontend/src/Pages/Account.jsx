import React, { useState, useEffect } from "react";
import "../Style/Account.css";
import { Link } from "react-router-dom";
import axios from 'axios';
const Account = () => {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/v1/admin/get-all-users');
  //     setUsers(users => response.data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      // Parse the stored data back into an object
      const parsedData = JSON.parse(storedData);

      // Set the retrieved data in the component's state
      setUsers(parsedData);
    }
  }, []);


  return (
    <div className="Display_half">
      <div className="container_login4 ">
        <div class="profile-container">
          <div class="profile-image">
            <img src={require("../assets/avatar.png")} alt="Profile Image" />
          </div>
          <div class="edit-overlay">
            <i class="fas fa-pencil-alt"></i>
          </div>
        </div>
        <div className="white">
          <p>{users.id}</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', width: '100%', marginTop: '10px', marginBottom: '10px' }}>
            <div style={{ flexDirection: 'row', display: 'flex', textAlign: 'center' }}>
              <p>UID:</p>  &nbsp;&nbsp;<i class="far fa-copy"></i>
            </div>

          </div>

          {/* {(localStorage.getItem("authToken"))?
                      <a >{localStorage.getItem('userid')}</a>
                      :"bbbxxxxx"
          } */}
          <div className="container">
            {users?.users?.map((user, index) => (
              <div className="row mb-4" key={index}>
                <div className="col">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div className="grey">
                      <div className="gre1"></div>
                      <div className="gre2">
                        <p className="curr">Your current level 0</p><p>VIP: {user.points ? user.points : 0}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p>Invitation code: V5BGG</p>
        </div>

        <div className="btncont">
          <div className="dip">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/deposit"
              style={{ textDecoration: "none", color: "white" }}
            >
              Deposit
            </Link>
          </div>
          <div className="with">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <Link
              to="/Withdrawal"
              style={{ textDecoration: "none", color: "white" }}
            >
              Withdrawal
            </Link>
          </div>
        </div>
        <div>
          <p className="func">Functions Category</p>
        </div>

        <div className="list">
          <div className="l1">
            <img src={require("../assets/vip.png")} className="listm" />
          </div>
          <div className="l2">
            <Link
              to="/vip"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              LEVEL
            </Link></div>
          <div className="l3">
            <i class="fas fa-caret-right"></i>
          </div>
        </div>
        <div className="list">
          <div className="l1">
            <img src={require("../assets/details.png")} className="listm" />
          </div>
          <div className="l2">
            <Link
              to="/AccountDetails"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Details
            </Link>
          </div>
          <div className="l3">
            <i class="fas fa-caret-right"></i>
          </div>
        </div>
        <div className="list">
          <div className="l1">
            <img src={require("../assets/about.png")} className="listm" />
          </div>

          <div className="l2">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              About US
            </Link>
          </div>
          <div className="l3">
            <i class="fas fa-caret-right"></i>
          </div>
        </div>
        <div className="list">
          <div className="l1">
            <img src={require("../assets/set.png")} className="listm" />
          </div>
          <div className="l2">
            <Link
              to="/setting"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Setting
            </Link>
          </div>
          <div className="l3">
            <i class="fas fa-caret-right"></i>
          </div>
        </div>
        <div className="list">
          <div className="l1">
            <img src={require("../assets/msg.png")} className="listm" />
          </div>
          <div className="l2">
            <Link
              to="/Customer"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Customer Service
            </Link>
          </div>
          <div className="l3">
            <i class="fas fa-caret-right"></i>
          </div>
        </div>
        <div className="list">
          <div className="l1">
            <img src={require("../assets/help.png")} className="listm" />
          </div>
          <div className="l2">
            <Link
              to="/helpcenter"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Help Center
            </Link>
          </div>
          <div className="l3">
            <i class="fas fa-caret-right"></i>
          </div>
        </div>
        <div className="list">
          <div className="l1">
            <img src={require("../assets/wallet.png")} className="listm" />
          </div>
          <div className="l2">
            <Link
              to="/blindwallet"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Blind wallet Address
            </Link>
          </div>
          <div className="l3">
            <i class="fas fa-caret-right"></i>
          </div>
        </div>
        <div className="list">
          <div className="l1">
            <img src={require("../assets/signout.png")} className="listm" />
          </div>
          <div className="l2">Sign Out</div>
          <div className="l3">
            <i class="fas fa-caret-right pb"></i>
          </div>
        </div>
        <div className="footer">
          <div className="maindiv">
            <div className="option">
              <img
                src={require("../assets/download.png")}
                className="footerimg"
              />
              Home
            </div>
            <div className="option">
              <img
                src={require("../assets/download1.png")}
                className="footerimg"
              />
              Event
            </div>
            <div className="option">
              <img
                src={require("../assets/tick2.png")}
                className="footerimg1"
              />
              Ticketing
            </div>
            <div className="option">
              <img
                src={require("../assets/download2.png")}
                className="footerimg"
              />
              Box Office
            </div>
            <div className="option">
              <img
                src={require("../assets/download4.png")}
                className="footerimg"
              />
              Account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
