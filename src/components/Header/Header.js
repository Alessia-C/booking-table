import React, { useEffect, useState } from "react";
import logo from "../../assets/img/Logo.svg";
import Nav from "../Nav";
import "./header.css";
import useIsMobile from "../../hooks/useIsMobile";
import MobileNav from "../Mobile/Menu/MobileNav";

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
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
