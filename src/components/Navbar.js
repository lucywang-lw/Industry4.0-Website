import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logoNoText from '../resources/logo/i4-logo-notext.png'

function Navbar() {
  const [click, setClick] = useState(false);

  const toggleShow = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  }


  
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
              <img className="logo" src={logoNoText} alt="logo" />
            </Link>
            <i className='menu-icon fas fa-bars' onClick={toggleShow} />
            <ul id='nav-menu' className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='menu-icon fas fa-times' onClick={closeMenu}/>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/team' className='nav-links' onClick={closeMenu}>
                  Team
                </Link>
              </li>
              { /* <li className='nav-item'>
                <Link to='/sponsors' className='nav-links' onClick={closeMenu}>
                  Sponsors
                </Link>
              </li> */ }
              <li className='nav-item'>
                <Link to='/faq' className='nav-links' onClick={closeMenu}>
                  FAQ
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
        </div>
    </nav>
  
  )
}

export default Navbar