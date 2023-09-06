import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Vip() {
  const vipLevels = [
    {
      level: "VIP 1",
      range: "RM200-RM1999",
      image: "https://www.primeworksstudio.com/resources/images/vip/vip1.png",
      commission: "Commission: 0.35%",
      dailyOrders: "Daily orders: 28",
    },
    {
      level: "VIP 2",
      range: "RM2000-RM3799",
      image: "https://www.primeworksstudio.com/resources/images/vip/vip2.png",
      commission: "Commission: 0.40%",
      dailyOrders: "Daily orders: 28",
    },
    {
      level: "VIP 3",
      range: "RM3800-RM7399",
      image: "https://www.primeworksstudio.com/resources/images/vip/vip3.png",
      commission: "Commission: 0.45%",
      dailyOrders: "Daily orders: 28",
    },
    {
      level: "VIP 0",
      range: "RM0-RM199",
      image: "https://www.primeworksstudio.com/resources/images/vip/vip0.png",
      commission: "Commission: 0.30%",
      dailyOrders: "Daily orders: 28",
    },
    {
      level: "VIP 4",
      range: "RM7400-RM14999",
      image: "https://www.primeworksstudio.com/resources/images/vip/vip4.png",
      commission: "Commission: 0.50%",
      dailyOrders: "Daily orders: 28",
    },
    {
      level: "VIP 5",
      range: "RM15000-RM27999",
      image: "https://www.primeworksstudio.com/resources/images/vip/vip5.png",
      commission: "Commission: 0.60%",
      dailyOrders: "Daily orders: 28",
    },
    {
      level: "VIP 6",
      range: "RM28000-RM37999",
      image: "https://www.primeworksstudio.com/resources/images/vip/vip6.png",
      commission: "Commission: 0.70%",
      dailyOrders: "Daily orders: 30",
    },
    {
      level: "VIP 7",
      range: "RM38000-RM119999",
      image: "https://www.primeworksstudio.com/resources/images/vip/vip7.png",
      commission: "Commission: 0.85%",
      dailyOrders: "Daily orders: 30",
    },
    {
      level: "VIP 8",
      range: "RM120000-RM250000",
      image: "https://www.primeworksstudio.com/resources/images/vip/vip8.png",
      commission: "Commission: 1.10%",
      dailyOrders: "Daily orders: 32",
    },
  ];

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/admin/get-all-users"
      );
      setUsers((users) => response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <>
      <div className="Display_half">
        <div className="container_login5 ">
          <div className="stickyhead">
            <div className="head1">
              <i class="fas fa-caret-left"></i>
            </div>
            <div className="head2">VIP LEVEL</div>
          </div>

          <div className="level-container">
            {vipLevels.map((level, index) => (
              <div
                key={index}
                className="level-item"
                style={{
                  backgroundColor: "#222",
                  color: "#fff",
                  borderRadius: "15px",
                  textAlign: "center",
                  padding: "5px 10px",
                  width: "calc(94% / 3)",
                  float: "left",
                  margin: "1%",
                }}
              >
                <h3 className="level-name">
                  <font style={{ verticalAlign: "inherit" }}>
                    {level.level}
                  </font>
                </h3>
                <p className="level-range">
                  <font style={{ verticalAlign: "inherit" }}>
                    {level.range}
                  </font>
                </p>
                <img
                  src={level.image}
                  width={80}
                  height="auto"
                  alt={`VIP ${index + 1}`}
                />
                <p className="level-details">
                  <font style={{ verticalAlign: "inherit" }}>
                    {level.commission}
                  </font>
                  <br />
                  <font style={{ verticalAlign: "inherit" }}>
                    {level.dailyOrders}
                  </font>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
