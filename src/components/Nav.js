import React from 'react'
import useIsMobile from '../hooks/useIsMobile';

const Nav = ({footer =false, setIsMenuOpen}) => {
  let reservationLabel = !footer ? "Book Your Table" : "Reservation";
  const isMobile = useIsMobile();
  
  const handleMenu = () => {
    isMobile && setIsMenuOpen(false);
  }

  return (
    <nav aria-label='Main Navigatio'>
        <ul>
            <li><a href='#hero' onClick={handleMenu}>Home</a></li>
            <li><a href='#menu' onClick={handleMenu}>Menu</a></li>
            <li><a href='#aboutus' onClick={handleMenu}>About us</a></li>
            <li><a href='#contact' onClick={handleMenu}>Contact</a></li>
            <li><a href='#reservation' className={!footer ? 'cta' : ''} onClick={handleMenu}>{reservationLabel}</a></li>
        </ul>
    </nav>
  )
}

export default Nav