import React from 'react'
import './Footer.css'
import logoNoText from '../resources/logo/i4-logo-notext.png'

function Footer() {
  return (
    <div className='footer'>
      <img className="logo" src={logoNoText} alt="logo" />
      Industry 4.0
    </div>
  )
}

export default Footer