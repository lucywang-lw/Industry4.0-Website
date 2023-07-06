import React from 'react'
import image1 from './img/allison-headshot.png'
import image2 from './img/Aniq.jpg'
import image3 from './img/Carina_Headshot.png'
import image4 from './img/jovina.png'
import image5 from './img/Michaela_Trevisan.png'
import image6 from './img/Omkaar.jpg'
import image7 from './img/Prithika_Hariharan.png'
import image8 from './img/Rodrigo_Headshot.jpg'
import image9 from './img/Sammi.jpg'
import image10 from './img/Sanjenah_Headshot.jpg'
import image11 from './img/SimranDhillon.png'
import image12 from './img/Suhayl_Headshot.jpg'
import image13 from './img/sunil_headshot.png'
import image14 from './img/zuhayr_headshot.png'
import image15 from './img/Michelle_headshot.png'

import './team.css'

function Team() {
  return (
    <>
    <section>
      <div class = "block">
        <h1 style={{color: 'black', textAlign: "center", fontSize: "50px"}}>OUR TEAM</h1>
        <p style={{color: 'gray', textAlign: "center"}}>Meet the team behind I4.0</p>
      </div>
        

      <div className = "block" id='container' style={{textAlign: 'center'}}>
        {/*2022 Competition Team*/}
        <div className = "profile" style={{display: 'inline-block',  paddingBottom:"30px"}}>
          <div className = "prfl_img">
            <img src = {image12} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Suhayl Sayed </h3>
            <p> Director </p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>
        
        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image8} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Rodrigo Tiscareno </h3>
            <p> Director </p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image2} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Aniq Premji </h3>
            <p> R&D Lead </p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image6} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Omkaar Kamath </h3>
            <p> Marketing Lead </p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image9} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Sammi Szeto </h3>
            <p> R&D Lead </p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image10} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Sanjenah Visagan </h3>
            <p> PR Lead </p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>


        {/*Past Competition Team Members*/}

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image1} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Allison </h3>
            <p> Position</p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image3} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Carina </h3>
            <p> Position</p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image4} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Jovina </h3>
            <p> Position</p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image5} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Michaela Trevisan </h3>
            <p> Position</p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image7} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Prithika Hriharan </h3>
            <p> Position</p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image11} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Simran Dhillon </h3>
            <p> Position </p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image13} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Sunil </h3>
            <p> Position</p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image14} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Zuhary </h3>
            <p> Position</p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

        <div className = "profile" style={{ paddingBottom:"30px", display: 'inline-block'}}>
          <div className = "prfl_img">
            <img src = {image15} className = "prfl_img" alt = ""/>
          </div>
          <div className='info'style={{display: 'inline-block'}}>
            <h3> Michelle </h3>
            <p> Position</p>
            <div style={{alignContent: 'center'}}>
              <i class="fa-brands fa-linkedin-in fa-2x"></i>
              <i class="fas fa fa-google fa-2x" style = {{paddingRight: "50px", paddingLeft: "50px"}}></i>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>

      </div>


    </section>

    </>
  )
}

export default Team