import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <nav>
      <Link to ='/'>Home</Link>
      <Link to ='about'>About</Link>

      <Link to ='contact'>Contact</Link>
      <Link to ='service'>Service</Link>
      <Link to ='other'>Other</Link>
      </nav>
    </div>
  )
}

export default Navbar
