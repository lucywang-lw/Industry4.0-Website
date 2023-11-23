import React, {useState} from 'react'
import "./About.css"
import IntroSvg from '../resources/images/about.svg'
import AnalysisSvg from '../resources/images/analysis.svg'
import TeamSvg from '../resources/images/team.svg'
import VisionSvg from '../resources/images/vision.svg'
import Faqitem from './FaqItem';
import "./pages/Faq.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import toyota from './images/toyota.png';
import uwaterloo from './images/uwaterloo.jpeg';
import majik from './images/Majik.png';
import MapleSoft from './images/Maplesoft.png';
import WEEF from './images/weef.png';
import Oculus from './images/Oculus.png';
import SponsorItem from './SponsorItem';
import './pages/Sponsors.css';


function About() {
  const [faqs, faqstate] = useState([
    {
      heading: "Where is the competition hosted?",
      answer: "The competition is based out of Waterloo but is run virtually, on Slack. Teams will participate at their own high schools.",
      open: false
    },
    {
      heading: "How many people can be on a team?",
      answer: "Teams of 4 are recommended, but teams can have 3-5 members.",
      open: false
    },
    {
      heading: " Can a school have more than one team?",
      answer: "Yes, provided the teams do not share information or work together in any way.",
      open: false
    },
    {
      heading: "What skills will I gain from this competition?",
      answer: "This competition focuses on process improvement through data analytics. It provides an opportunity to develop your problem solving, analytical, Excel, and data analysis skills, among others.",
      open: false
    },
    {
      heading: " Is there a registration fee?",
      answer: "No, there are no participation fees!",
      open: false
    },
    {
      heading: "Is there a prize?",
      answer: "Yes! The winners will recieve a prize, however, the exact prizing is to be determined.",
      open: false
    }
  ])
  //changes the open state of faq component, loops through list of faqs using reactstate
  const faqtoggle = index => {
    faqstate(faqs.map((faq,i) => {
      if (i === index) {
        faq.open = !faq.open
      } 
      else {
        faq.open = false;
      }
      return faq;
    } ) )
  }

  const SponsorList = [
    {
      name: "Toyota",
      image: toyota,
      text: "Toyota is a Japanese multinational automotive manufacturer that strives to deliver quality automotive products all around the world",
    },
    {
      name: "MAJiK",
      image: majik,
      text: "MAJiK systems connects to equipment controls to monitor, analyze, and optimize manufacturing operations.",
    },
    {
      name: "UWaterloo Management Sciences",
      image: uwaterloo,
      text: "Management science and engineering at UWaterloo is a broad and interdisciplinary study of problem solving and decision making in organizations. ",
    },
    {
      name: "WEEF",
      image: WEEF,
      text: "The goal of the Waterloo Engineering Endowment Foundation (WEEF) is to continuously improve the educational environment for undergraduate engineering students and maintain our outstanding reputation.",
    },
    {
      name: "Oculus",
      image: Oculus,
      text: "",
    },
    {
      name: "MapleSoft",
      image: MapleSoft,
      text: "The mission at Maplesoft is to provide powerful technology to explore, derive, capture, solve and disseminate mathematical problems and their applications, and to make math easier to learn, understand, and use.",
    },
  ]

  return (
    <div id="about-page">
      <div id="intro-section">
        <img className="about-svg" src={IntroSvg} alt="about" />
        <div className="text">
          <h1 className="title" style={{fontSize: 125, textAlign: 'right'}}>Industry 4.0</h1>
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

      <div id="FAQ">
        <br></br>
        <h1 className='title faq-title'>Frequently Asked Questions</h1>
        <div className = "faq-components">
          {faqs.map((faq, index) => (
            <div key={index}>
            <Faqitem faq={faq} index={index} faqtoggle={faqtoggle}/>
            </div>
          ))}
        </div>
      </div>

      <div id="spons">
        <div className='swiper-background' style = {{padding:40}}>
          <br></br>
          <h1 className = "title">
            Our Past Sponsors
          </h1>

          <Swiper
            className='swiper'
            navigation={true} 
            modules={[Navigation, Autoplay, Pagination]}  
            slidesPerView={1}
            breakpoints = {{  
              1050 : {slidesPerView:1},
            }}
            loop = {true}
            Autoplay={{
              delay: 10,
              disableOnInteraction: false,
            }}
          >
            {SponsorList.map((sponsor,index) => {
              return (
                <SwiperSlide className = "slide">
                  <SponsorItem id= {index} name = {sponsor.name} image = {sponsor.image} text = {sponsor.text}/>
                  <img src = {sponsor.image} className = "swiper-image" style={{ width: 300, height: 175, padding: 50}} alt = "logo"/>
                  <p className='description'>{sponsor.text}</p>
                </SwiperSlide>
              )
            })} 
          </Swiper>
        </div>
      </div>
     
    </div>
  )
}

export default About