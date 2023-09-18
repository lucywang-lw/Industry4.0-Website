import React from 'react'
import "./Events.css"
import Career from '../images/career.svg';
import IISE from '../images/IISE.svg';
import Workshops from '../images/Workshops.svg';
import compitition from '../images/competition.svg';


function Events() {
  return (
    <>
    <div id = "past-events">
    <div>
      <h1>Initiatives</h1>
    </div>
    <div id='firstEvent'>
      <div id='firstImage'>
        <img className="firstEventimage" src={Workshops} alt="about" />
      </div>
        <div className="t">
          <h2>Workshops</h2>
          <p>We'll be hosting a variety of workshops throughout the Fall 2023 term that help students develop in demand skills employers are looking for. These workshops are open to anyone of any skill level so be on the look out for announcements about this in the coming weeks!
            A preview for the workshops planned this term:

            <uL>-Intro to Python and Data Analysis</uL>

            <ul>-Excel/VBA Mastery</ul>
          </p>
        </div>
    </div>
    <div id='secondEvent'>
        <div id='secondImage'>
          <img className="SecondEventimage" src={Career} alt="about" />
        </div>
        <div className="t">
          <h2>Career Help</h2>
          <p>We understand that navigating through the coop program can be a struggle for most students, which is why I4 hosts Resume Critiques, Interview Prep, and other career development sessions throughout the term designed to assist students in their job search process.</p>
        </div>
    </div>
    <div id='thirdEvent'>
      <div id='thirdImage'>
        <img className="ThirdEventimage" src={compitition} alt="about" />
      </div>
        <div className="t">
          <h2>Case Competitions</h2>
          <p>We host an annual case competition for high schools across Canada. The competition is one day long where students are tested on their analytical, time management and optimization skills, through which they learn how to work on engineering cases, manage time well under pressure and create quality solutions using engineering principles.</p>
        </div>
    </div>
    <div id='fourthEvent'>
      <div id='fourthImage'>
        <img className="FourthEventimage" src={IISE} alt="about" />
      </div>
        <div className="t">
          <h2>IISE Partnership</h2>
          <p>The IISE is an international non-profit organization dedicated around industrial and systems engineering. The IISE hosts yearly conferences and we hope to attend the one happening this year in Montréal, Quebec!</p>
        </div>
    
    </div>
    </div>
    </>
  )
}

export default Events