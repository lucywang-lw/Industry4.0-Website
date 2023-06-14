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
          <p className="about-description">Management Engineering conferences run by students at the University of Waterloo</p>
        </div>
      </div>

      <div id="about-section">
        <div className="about-desc">
          <h1>About Us</h1>
          <div className='blurb'>
          I4 designs case competitions and conferences geared towards Management Engineering Concepts. We achieve this through education, mentorship, and application (for execs).
          The name comes from what is known as the fourth industrial revolution, involving the computerization of manufacturing and increase in big data and analytics.
          </div>
        </div>
        <img className="desc-svg" src={TeamSvg} alt="about" />
        <img className="desc-svg" src={AnalysisSvg} alt="about" />
        <div className="about-desc">
          <h1>Our Mission</h1>
          <div className='blurb'> To provide access to resources in a hands-on learning environment about Management Engineering, promote awareness of Management Engineering amongst the faculties, and improve outreach.
“Preparing Students for Industry 4.0”
 </div>
        </div>
      </div>
     
    </div>
  )
}

export default About