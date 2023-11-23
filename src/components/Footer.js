import React from 'react'
import './Footer.css'
import logoNoText from '../resources/logo/i4-logo-notext.png'

function Footer() {
  return (
    <div className='footer'>
      <img className="logo" src={logoNoText} alt="logo" />
      Industry 4.0
      <div className='socials-footer'>            
        <a className='social-footer' href="https://www.instagram.com/i4competition/"> 
          <i className="fas fa fa-instagram icon"></i> 
        </a>
      
        <a className='social-footer' href="https://www.linkedin.com/company/i4competition/"> 
          <i class="fa-brands fa-linkedin-in icon"></i>
        </a>

        <a className='social-footer' href="mailto: industry4team@uwaterloo.ca"> 
          <i class="fa-regular fa-envelope icon"></i>
        </a>

        <a className='social-footer' href="https://discord.gg/8b5PyAfC"> 
        <i class="fa-brands fa-discord icon"></i>
        </a>
      </div>
    </div>
  )
}
export default Footer