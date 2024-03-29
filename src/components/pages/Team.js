import React from 'react'
import './Team.css'
import TeamMember from '../TeamMember'
import adriel from '../../resources/team/adriel.jpeg'
import anastan from '../../resources/team/anastan.png'
import tejesh from '../../resources/team/tejesh.png'
import fahmid from '../../resources/team/fahmid.png'
import lucy from '../../resources/team/lucy.jpeg'
import joshua from '../../resources/team/joshua.jpeg'
import joseph from '../../resources/team/joseph.png'
import abhishek from '../../resources/team/abhishek.jpeg'
import ibnat from '../../resources/team/ibnat.jpeg'
import jewel from '../../resources/team/jewel.png'
import abhinav from '../../resources/team/abhinav.jpeg'
import brooklyn from '../../resources/team/brooklyn.jpeg'
import kirti from '../../resources/team/kirti.jpeg'
import dhruv from '../../resources/team/dhruv.png'
import sunny from '../../resources/team/sunny.png'
import agishan from '../../resources/team/agishan.png'
import matthew from '../../resources/team/matthew.jpeg'
import saanika from '../../resources/team/saanika.jpeg'
import aithy from '../../resources/team/aithy.png'

import allison from '../../resources/oldteam/allison-headshot.png'
import Aniq from '../../resources/oldteam/Aniq.jpg'
import Carina from '../../resources/oldteam/Carina_Headshot.png'
import jovina from '../../resources/oldteam/jovina.png'
import Michaela_Trevisan from '../../resources/oldteam/Michaela_Trevisan.png'
import Omkaar from '../../resources/oldteam/Omkaar.jpg'
import Prithika_Hariharan from '../../resources/oldteam/Prithika_Hariharan.png'
import Rodrigo from '../../resources/oldteam/Rodrigo_Headshot.jpg'
import Sammi from '../../resources/oldteam/Sammi.jpg'
import Sanjenah from '../../resources/oldteam/Sanjenah_Headshot.jpg'
import Simran from '../../resources/oldteam/SimranDhillon.png'
import Suhayl from '../../resources/oldteam/Suhayl_Headshot.jpg'
import sunil from '../../resources/oldteam/sunil_headshot.png'
import zuhayr from '../../resources/oldteam/zuhayr_headshot.png'
import michelle from '../../resources/oldteam/Michelle_headshot.png'



const directorship = [
  { image: adriel, name: "Adriel De Vera", role: "Team Director"},
  { image: anastan, name: "Anastan Gnanapragasam", role: "Competition Director"},
  { image: tejesh, name: "Tejesh Arujuna", role: "Directorship Exec"},
  { image: fahmid, name: "Fahmid Ahmed", role: "Directorship Exec"}
]

const software = [
  { image: lucy, name: "Lucy Wang", role: "Software Director"},
  { image: joshua, name: "Joshua Li", role: "Software Exec"},
  { image: joseph, name: "Joseph zhang", role: "Software Exec"}
]

const marketing = [
  { image: abhishek, name: "Abhishek Srikaran", role: "Marketing Director"},
  { image: ibnat, name: "Ibnat Choudkhuri", role: "Marketing Director"},
  { image: jewel, name: "Jewel Reese", role: "Marketing Exec"},
  { image: abhinav, name: "Abhinav Dixit", role: "Marketing Exec"},
  { image: brooklyn, name: "Brooklyn Wong", role: "Product Manager Exec"}
]

const pr = [
  { image: kirti, name: "Kirti Bansal", role: "Outreach Director"},
  { image: dhruv, name: "Dhruv Sharma", role: "Logistics Director"},
  { image: sunny, name: "Sunny Shi", role: "PR Exec"},
  { image: agishan, name: "Agishan Thaya", role: "Logistics Director"}
]

const rnd = [
  { image: matthew, name: "Matthew Ho", role: "R&D Director"},
  { image: saanika, name: "Saanika Sharma", role: "R&D Exec"},
  { image: aithy, name: "Aithy Nguyen", role: "Product Manager Exec"},
]

const pastteam = [
  { image: allison, name: "Allison", role: ""},
  { image: Aniq, name: "Aniq Premji", role: "R&D Lead"},
  { image: Carina, name: "Carina", role: ""},
  { image: jovina, name: "Jovina", role: ""},
  { image: Michaela_Trevisan, name: "Michaela", role: ""},
  { image: michelle, name: "Michelle", role: ""},
  { image: Omkaar, name: "Omkaar Kamath", role: "Marketing Lead"},
  { image: Prithika_Hariharan, name: "Prithika", role: ""},
  { image: Rodrigo, name: "Rodrigo Tiscareno", role: "Director"},
  { image: Sammi, name: "Sammi Szeto", role: "R&D Lead"},
  { image: Sanjenah, name: "Sanjenah Visagan", role: "PR Lead"},
  { image: Simran, name: "Simran", role: ""},
  { image: Suhayl, name: "Suhayl Sayed", role: "Director"},
  { image: sunil, name: "Sunil", role: ""},
  { image: zuhayr, name: "Zuhayr", role: ""},
]


function Team() {
  return (
    <div className="team-page">
      <br></br>
      <h1 className='title'>Meet the Team</h1>
      <div className="department">
          <h1>Directorship</h1>
          <div className="dept-pictures">
            {
              directorship.map(photo => {
                return (
                  <div className="member">
                    <TeamMember id={photo.name} image={photo} />
                  </div>
                )
              })
            }
          </div>
          <hr></hr>
      </div>
      <div className="department">
          <h1>Public Relations</h1>
          <div className="dept-pictures">
            {
              pr.map(photo => {
                return (
                  <div className="member">
                    <TeamMember id={photo.name} image={photo} />
                  </div>
                )
              })
            }
          </div>
          <hr></hr>
      </div>
      <div className="department">
        <h1>Software</h1>
        <div className="dept-pictures">
          {
            software.map(photo => {
              return (
                <div className="member">
                  <TeamMember id={photo.name} image={photo} />
                </div>
              )
            })
          }
        </div>
        <hr></hr>
      </div>
      <div className="department">
          <h1>Research and Development</h1>
          <div className="dept-pictures">
            {
              rnd.map(photo => {
                return (
                  <div className="member">
                    <TeamMember id={photo.name} image={photo} />
                  </div>
                )
              })
            }
          </div>
          <hr></hr>
      </div>
      <div className="department">
          <h1>Marketing</h1>
          <div className="dept-pictures">
            {
              marketing.map(photo => {
                return (
                  <div className="member">
                    <TeamMember id={photo.name} image={photo} />
                  </div>
                )
              })
            }
          </div>
          <hr></hr>
      </div>
      <div className="department">
          <h1>Past Team Members</h1>
          <div className="dept-pictures">
            {
              pastteam.map(photo => {
                return (
                  <div className="member">
                    <TeamMember id={photo.name} image={photo} />
                  </div>
                )
              })
            }
          </div>
          <hr></hr>
      </div>
    </div>
  )
}

export default Team