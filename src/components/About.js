import React from 'react'
import "./About.css"
import IntroSvg from '../resources/images/about.svg'
import AnalysisSvg from '../resources/images/analysis.svg'
import TeamSvg from '../resources/images/team.svg'
import VisionSvg from '../resources/images/vision.svg'

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
          I4 is an organization focused on teaching Management sciences to students by creating a hands-on learning environment through case studies, workshops, and leadership events. We take pride in creating solutions related to technology, systems design, human capital and process engineering.
          </div>
        </div>
        <img className="desc-svg" src={TeamSvg} alt="about" />
        <img className="desc-svg" src={AnalysisSvg} alt="about" />
        <div className="about-desc">
          <h1>Our Mission</h1>
          <div className='blurb'> 
            Industry 4.0 is dedicated to fostering a dynamic learning environment, equipping students with the skills and insights necessary to excel in the era of Industry 4.0.
          </div>
        </div>
        <div className="about-desc">
          <h1>Our Vision</h1>
          <div className='blurb'> 
            We envision I4 as a transformative platform that seeks to equip students with the knowledge, connections, and skills needed to thrive in the rapidly-evolving tech industry. This is accomplished through our various mentorship opportunities, workshops that enhance career and personal development, and caring support from our vibrant community.
          </div>
        </div>
        <img className="desc-svg" src={VisionSvg} alt="about" />
      </div>
     
    </div>
  )
}

export default About