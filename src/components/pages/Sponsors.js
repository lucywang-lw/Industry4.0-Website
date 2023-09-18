import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import Swiper core and required modules
/*import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard'; */
import toyota from '../images/toyota.png';
import uwaterloo from '../images/uwaterloo.jpeg';
import majik from '../images/Majik.png';
import MapleSoft from '../images/Maplesoft.png';
import WEEF from '../images/weef.png';
import Oculus from '../images/Oculus.png';
import SponsorItem from '../SponsorItem';
import './Sponsors.css';
//import { faL } from '@fortawesome/free-solid-svg-icons';

//list of faqs, mapped later
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

function Sponsors() {
return (
  <div className='swiper-background'>
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
  )
}

export default Sponsors 