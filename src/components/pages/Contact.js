import React, { useState } from 'react'
import "./Contact.css"

function Contact() {
  const [status, setStatus] = useState("Submit");
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    let details = {
      name: name,
      email: email,
      message: message,
    };
    let response = await fetch("http://localhost:5500/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className='contact-page'>
      <br></br>
    <h1 className="title">Contact Us</h1>
      <h1>Socials</h1>
      <div className="text-medium"> Have a question about I4.0? Reach out to us through our socials. We'll be happy to answer!</div>

      <div className='socials'>            
        <a className='social' href="https://www.instagram.com/i4competition/"> 
          <i className="fas fa fa-instagram icon"></i> 
          <span className="username">@i4competition</span>
        </a>
      
        <a className='social' href="https://www.linkedin.com/company/i4competition/"> 
          <i class="fa-brands fa-linkedin-in icon"></i>
          <span className="username">i4competition</span>
        </a>

        <a className='social' href="mailto: industry4team@uwaterloo.ca"> 
          <i class="fa-regular fa-envelope icon"></i>
          <span className="username">industry4team@uwaterloo.ca</span>
        </a>

        <a className='social' href="https://discord.gg/8b5PyAfC"> 
        <i class="fa-brands fa-discord icon"></i>
          <span className="username">discord.gg/8b5PyAfC</span>
        </a>
        <a className='social' href="https://www.i4competition.ca/"> 
          <i class="fa-solid fa-link icon"></i>        
          <span className="username">Previous Website</span>
        </a>
      </div>

      <hr></hr>

      <div className="form-section">
        <h1>Send Us a Message</h1>
        <form className= "e-form" onSubmit={handleSubmit}>
          <label className= "form-labels"> Name </label>
          <input disabled className= "form-input" type = "text" value={name} onChange={handleName} required />

          <label className= "form-labels"> Email </label>
          <input disabled className= "form-input" type = "text" value={email} onChange={handleEmail} required />

          <label className= "form-labels"> Message </label>
          <input disabled className= "form-input" type = "text" value={message} onChange={handleMessage} style = {{paddingBottom: "50px"}} required />
          
          {/* <button className='submit' type="submit">{status}</button> */}
          <button className='submit' type="submit" disabled>Coming Soon</button>
        </form>
      </div>
    </div>
  )
}

export default Contact