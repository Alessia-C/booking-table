import React from 'react'

const Nav = () => {
  return (
    <nav aria-label='Main Navigatio'>
        <ul>
            <li><a href='#hero'>Home</a></li>
            <li><a href='#reservation' className='cta'>Book Your Table</a></li>
        </ul>
    </nav>
  )
}

export default Nav