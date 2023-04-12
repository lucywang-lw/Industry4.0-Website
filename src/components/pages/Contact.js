import React from 'react'
import "./Contact.css"


const submission = (event) => {
  event.preventDefault();
  alert('Done')
  
}
function subform(){
  return(
    <form onSubmit = {submission}>
      <label> name 
        <input type = "text"/>
      </label>

      <label> email 
        <input type = "text"/>
      </label>

      <label> Message 
        <input type = "text"/>
      </label>
      
      <input type = "submit"/>

    </form>
  )
}


function Contact() {
  return (
    <div className='contact-page'>
      <br></br>
    <h1 className="title">Contact Us</h1>
      <h1>Socials</h1>
      <div class="text-medium"> Have a question about I4.0? Reach out to us through our socials. We'll be happy to answer!</div>

      <div className='socials'>            
        <a className='social' href="https://www.instagram.com/i4competition/"> 
          <i className="fas fa fa-instagram icon"></i> 
          <span class="username">@i4competition</span>
        </a>
      
        <a className='social' href="https://www.gmail.com"> 
          <i className="fas fa fa-google icon"></i>
          <span class="username">i4@gmail.com</span>
        </a>

        <a className='social' href="https://www.gmail.com"> 
          <i className="fas fa fa-google icon"></i>
          <span class="username">i4@gmail.com</span>
        </a>

        <a className='social' href="https://www.gmail.com"> 
          <i className="fas fa fa-google icon"></i>
          <span class="username">i4@gmail.com</span>
        </a>
        <a className='social' href="https://www.gmail.com"> 
          <i className="fas fa fa-google icon"></i>
          <span class="username">i4@gmail.com</span>
        </a>
      </div>

      <hr></hr>

      <div className="form-section">
        <h1>Send Us a Message</h1>
        <form className= "e-form" onSubmit = {submission}>
          <label className= "form-labels"> Name </label>
          <input className= "form-input" type = "text"/>

          <label className= "form-labels"> Email </label>
          <input className= "form-input" type = "text"/>

          <label className= "form-labels"> Message </label>
          <input className= "form-input" type = "text" style = {{paddingBottom: "50px"}}/>
          
          <button className='submit' type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact