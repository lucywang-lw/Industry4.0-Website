import React from 'react'
import "./Contact.css"


// const submission = (event) => {
//   event.preventDefault();
//   alert('Done')
  
// }

function Contact() {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(email + ' ' + message + ' ' + name);
  };

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
        <form className= "e-form" onSubmit={handleSubmit}>
          <label className= "form-labels"> Name </label>
          <input className= "form-input" type = "text" value={name} onChange={handleName}/>

          <label className= "form-labels"> Email </label>
          <input className= "form-input" type = "text" value={email} onChange={handleEmail}/>

          <label className= "form-labels"> Message </label>
          <input className= "form-input" type = "text" value={message} onChange={handleMessage} style = {{paddingBottom: "50px"}}/>
          
          <button className='submit' type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact