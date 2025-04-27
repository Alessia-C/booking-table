import React from 'react'

const Nav = ({footer}) => {
  let reservationLabel = !footer ? "Book Your Table" : "Reservation"
  return (
    <nav aria-label='Main Navigatio'>
        <ul>
            <li><a href='#hero'>Home</a></li>
            <li><a href='#reservation' className={!footer ? 'cta' : ''}>{reservationLabel}</a></li>
        </ul>
    </nav>
  )
}

export default Nav