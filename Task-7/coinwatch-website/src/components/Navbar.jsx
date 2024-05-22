import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {
  const[nav,setNav] = useState(false)

  const handleNav = () => setNav(!nav);

  return (
    <div className='header'>
      <div className="container">
        <h1>Co<span className="primary">Bit</span></h1>
        <ul className={nav? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className='btn'>Connect Wallet</button>
        </div>

        {/* hamberger menu */}
        <div onClick={handleNav} className="hamburger">
         {nav?(<FaTimes size={20} style={{color:'#333'}} />):(<FaBars size={20} style={{color:'#333'}}/>)} 
        </div>
      </div>
    </div>
  )
}

export default Navbar