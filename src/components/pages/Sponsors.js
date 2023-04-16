import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SponsorItem from '../SponsorItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import toyota from '../images/toyota.png';
import './Sponsors.css';
  //list of faqs, mapped later
const SponsorList = [
  {
    name: "toyota",
    image: toyota,
    text: "details about the sponsor here",
  },
  {
    name: "toyota",
    image: toyota,
    text: "details about the sponsor here",
  },
  {
    name: "test",
    image: toyota,
    text: "details about the sponsor here",
  },
  {
    name: "toyota",
    image: toyota,
    text: "details about the sponsor here",
  },
  {
    name: "test",
    image: toyota,
    text: "details about the sponsor here",
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
      modules={[Navigation]}  
      slidesPerView={1}
      breakpoints = {{  
        1050 : {slidesPerView:2},
      }}
      loop = {true}
    >
      {SponsorList.map((sponsor,index) => {
        return (
          <SwiperSlide className = "slide">
            <SponsorItem id= {index} name = {sponsor.name} image = {sponsor.image} text = {sponsor.text}/>
            <img src = {sponsor.image} className = "swiper-image"/>
            <p className='description'>{sponsor.text}</p>
          </SwiperSlide>
        )
      })} 
    </Swiper>
  </div>
  )
}

export default Sponsors