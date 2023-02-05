import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const menuNavbar = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Contact',
      url: '/contact'
    }
  ]

  return (
    <div className='navbar'>
      <a href="."><h1>VELOCITY</h1></a>

      <ul>
        <li><NavLink>Home</NavLink></li>
      </ul>

 
    </div>
  )
}

export default Navbar
