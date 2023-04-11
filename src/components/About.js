import React from 'react'
import "./About.css"
import logoNoText from '../resources/logo/i4-logo-notext.png'
import IntroSvg from '../resources/images/about.svg'
function About() {
  return (
    <div id="about-page">
      <div id="intro-section">
         <img className="about-svg" src={IntroSvg} alt="about" />
          <div className="text">
            <h1 className="title">Industry 4.0</h1>
            <p className="description">University of Waterloo's ... design team</p>
          </div>
      </div>

      <div id="about-section">
        <br></br>
        <div className="left-title description">
          <h1>About Us</h1>
        </div>
        <div className="right-title description">
          <h1>Our Mission</h1>
        </div>
        <div className="left-title description">
          <h1>Our Vision</h1>
        </div>
      </div>
     
    </div>
  )
}

export default About