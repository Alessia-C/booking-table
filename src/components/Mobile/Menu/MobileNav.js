import React, { useEffect, useState } from "react";
import Nav from "../../Nav";
import "./menu.css";

const MobileNav = ({setIsMenuOpen, isMenuOpen}) => {
  const [isOpen, setIsOpened] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if(isMenuOpen) {
      setIsOpened("menu-opened");
    } else {
      setIsOpened("");
    }
  }, [isMenuOpen])

  return (
    <div className={`hamburger-menu ${isOpen}`}>
      <button className="hamburger-icon" onClick={toggleMenu}>
        <span className="bar"></span>
      </button>
      {isOpen && <Nav />}
    </div>
  );
};

export default MobileNav;
