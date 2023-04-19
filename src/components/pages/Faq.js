import React, {useState} from 'react';
import Faqitem from '../FaqItem';
import "./Faq.css";
function Faq() {
  //list of faqs, mapped later
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
      },
      {
        heading: "I am a student, how do I sign my team up?",
        answer: "In order to sign up, you will need a teacher to be your advisor. First, they will have to fill out this form (coming soon). Then, they will receive an email in the coming weeks which will include a detailed sign up form for each team.",
        open: false
      },
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
  //loops through list of faqs to create individual components
  return (
    <div className='faq-page'>
      <br></br>
      <h1 className='title'>Frequently Asked Questions</h1>
      <div className = "faq-components">
        {faqs.map((faq, index) => (
          <div key={index}>
          <Faqitem faq={faq} index={index} faqtoggle={faqtoggle}/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Faq;