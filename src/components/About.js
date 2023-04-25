import React from 'react'
import "./About.css"
import IntroSvg from '../resources/images/about.svg'
import AnalysisSvg from '../resources/images/analysis.svg'
import TeamSvg from '../resources/images/team.svg'

function About() {
  return (
    <div id="about-page">
      <div id="intro-section">
        <img className="about-svg" src={IntroSvg} alt="about" />
        <div className="text">
          <h1 className="title">Industry 4.0</h1>
          <p className="about-description">High-school level data-driven competition run by students at the University of Waterloo</p>
        </div>
      </div>

      <div id="about-section">
        <br></br>
        <div className="about-desc">
          <h1>About Us</h1>
          <div className='blurb'>
          The I4 challenge is a high school level data-driven competition run by students at the University of Waterloo. The name comes from what is known as the fourth industrial revolution, involving the computerization of manufacturing and increase in big data and analytics.
          </div>
        </div>
        <img className="desc-svg" src={TeamSvg} alt="about" />
        <img className="desc-svg" src={AnalysisSvg} alt="about" />
        <div className="about-desc">
          <h1>Our Mission</h1>
          <div className='blurb'> To provide access and resources to the University of Waterloo about Management Engineering, extend awareness of Management Engineering amongst the faculties, and improve high school outreach. </div>
        </div>
      </div>
     
    </div>
  )
}

export default About