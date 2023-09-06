import React from "react";
import "../Style/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Display_half">
      <div className="footer">
        <div className="maindiv">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="option">
              <img
                src={require("../assets/download.png")}
                className="footerimg"
              />
              Home
            </div>
          </Link>
          <Link
            to="./events"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="option">
              <img
                src={require("../assets/download1.png")}
                className="footerimg"
              />
              Event
            </div>
          </Link>
          <Link to="/ticket" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            <div className="option" style={{ marginLeft: "20px" }}>
              <img
                src={require("../assets/tick2.png")}
                className="footerimg1"
              />
              Ticketing
            </div>
          </Link>
          <a
            href="https://www.boxofficemojo.com/"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <div className="option">
              <img
                src={require("../assets/download2.png")}
                className="footerimg"
              />
              Box Office
            </div>
          </a>
          <Link
            to="/account"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <div className="option">
              <img
                src={require("../assets/download4.png")}
                className="footerimg"
              />
              Account
            </div>
          </Link>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <div className="option">
              <img
                src={require("../assets/download4.png")}
                className="footerimg"
              />
              Registeration
            </div>
          </Link>
          <Link
            to="/adminregister"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <div className="option">
              <img
                src={require("../assets/download4.png")}
                className="footerimg"
              />
              Admin
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
