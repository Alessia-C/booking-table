import React from "react";
import logo from "../../assets/img/Logo.svg";
import Nav from "../Nav";
import "./header.css";
import useIsMobile from "../../hooks/useIsMobile";
import MobileNav from "../Mobile/Menu/MobileNav";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header>
      <img
        src={logo}
        alt="logo little lemon restaurant"
        aria-label="Little Lemon Restaurant Logo"
      />
      {isMobile ? <MobileNav /> : <Nav />}
    </header>
  );
};

export default Header;
