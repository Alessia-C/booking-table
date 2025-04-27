import React, { useState } from "react";
import Nav from "../../Nav";
import "./menu.css"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev =>!prev);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <div className={isOpen ? "bar1 open" : "bar1"}></div>
        <div className={isOpen ? "bar2 open" : "bar2"}></div>
        <div className={isOpen ? "bar3 open" : "bar3"}></div>
      </button>
      <div className={isOpen ? "menu open" : "menu"}>
        <Nav />
      </div>
    </div>
  );
};

export default MobileNav;
