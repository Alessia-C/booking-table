import React from "react";
import logo from "../../assets/img/Logo.svg";
import Nav from "../Nav";
import "./header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo little lemon restaurant" />
      <Nav />
    </header>
  );
};

export default Header;
