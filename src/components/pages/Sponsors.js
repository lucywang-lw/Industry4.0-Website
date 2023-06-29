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
import UW from '../images/UW.jpeg';
import Maplesoft from '../images/Maplesoft.png';
import UWMSCI from '../images/UWMSCI.png';
import './Sponsors.css';
  //list of faqs, mapped later
const SponsorList = [
  {
    name: "Toyota",
    image: toyota,
    text: "Toyota is a renowned Japanese automaker. With a strong emphasis on quality, efficiency, and innovation, Toyota has established itself as a leader in the automotive industry.",
  },
  {
    name: "Maplesoft",
    image: Maplesoft,
    text: "Maplesoft is a leading software company specializing in advanced mathematical and analytical solutions. With their flagship product, Maple, they provide a powerful platform for mathematical modeling, simulation, and analysis, catering to a wide range of industries and academic institutions worldwide.",
  },
  {
    name: "University of Waterloo",
    image: UW,
    text: "Renowned for its strong focus on cooperative education, entrepreneurship, and innovation, the university offers a wide range of academic programs across various disciplines.",
  },
  {
    name: "Management Sciences Department",
    image: UWMSCI,
    text: "Known for its unique blend of business, mathematics, and engineering principles, the program equips students with the analytical skills and strategic thinking necessary to solve complex problems and make informed decisions in a wide range of industries.",
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