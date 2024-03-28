import React from "react";
import logo from "../../assets/img/Logo.svg";
import "./footer.css";
import Nav from "../Nav";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo little lemon restaurant" aria-label="Little Lemon Restaurant Logo" />
      <div className="wrap-col">
        <div className="col">
          <h4>Navigation</h4>
          <Nav />
        </div>
        <div className="col">
          <h4>Contact</h4>
          <p>333 333 3333</p>
        </div>
        <div className="col">
          <h4>Social</h4>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
