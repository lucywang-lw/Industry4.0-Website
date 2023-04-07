import React from 'react'
import "./contact.css"


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
    <>
    <h1 class = "contact">Contact Us</h1>
      <div class = "text"> Have a question about I4.0? Reach out to us through our socials. We'll be happy to answer!</div>
      <h3 class = "social-head"><b>Socials</b></h3>
      <div style = {{display: "inline"}}>
        <div class = "links">
          <div>
            <a href = "https://www.youtube.com/watch?v=U3w0NjYbEIo"> 
              <i class="fas fa fa-youtube-play fa-3x" style = {{color: "#dc143c", paddingLeft: "20px",paddingBottom: "15px" ,paddingTop: "8px"}}></i>
              <p class = "labels">Youtube</p>
            </a>
            
            <a href = "https://www.instagram.com/i4competition/"> 
              <i class="fas fa fa-instagram fa-3x" style = {{color: "#f08080", paddingLeft: "26px"}}></i> 
              <p class = "labels" style = {{paddingLeft: "26px"}}>Instagram</p>
            </a>
            
            <a href = "https://www.gmail.com"> 
              <i class="fas fa fa-google fa-3x" style = {{color: "#6495ed", paddingLeft: "25px",paddingTop: "17px"}}></i>
              <p class = "labels" style = {{paddingLeft: "24px"}}>i4@gmail.com</p>
            </a>
            
            
          </div>
        </div>
        
        <form class = "e-form" onSubmit = {submission}>
          <label class = "form-labels"> Name </label>
          <input class = "form-input" type = "text"/>

          <label class = "form-labels"> Email </label>
          <input class = "form-input" type = "text"/>

          <label class = "form-labels"> Message </label>
          <input class = "form-input" type = "text" style = {{paddingBottom: "50px"}}/>
          
          <input type = "submit" style = {{margin: "20px", padding: "10px",paddingRight:"50px",paddingLeft:"50px",textAlign:'center', backgroundColor:"lightgreen",borderRadius: "10px",color:'white',borderColor:'white'}}/>

        </form>
      </div>
    </>
  )
}

export default Contact