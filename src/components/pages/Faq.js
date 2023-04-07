import React, {useState} from 'react';
import Faqitem from '../FaqItem';
import "../Faq.css";
function Faq() {
  //list of faqs, mapped later
  const [faqs, faqstate] = useState([
      {
        heading: "question 1",
        answer: "I4 IS A COMPETETION DESIGN TEAM AT THE UNIVERSITY OF WATERLOO MORE TEXT MORE TEXT MORE TEXT",
        open: true
      },
      {
        heading: "question 2",
        answer: "I4 IS A COMPETETION DESIGN TEAM AT THE UNIVERSITY OF WATERLOO MORE TEXT MORE TEXT MORE TEXT",
        open: false
      },
      {
        heading: "question 3",
        answer: "I4 IS A COMPETETION DESIGN TEAM AT THE UNIVERSITY OF WATERLOO MORE TEXT MORE TEXT MORE TEXT",
        open: true
      },
      {
        heading: "question 4",
        answer: "TESTTESTTESTTESTTESTTESTTESTTESTTEST",
        open: false
      },
      {
        heading: "question 5",
        answer: "TESTTESTTESTTESTTESTTESTTESTTESTTEST",
        open: false
      },
      {
        heading: "question 6",
        answer: "TESTTESTTESTTESTTESTTESTTESTTESTTEST",
        open: false
      },
      {
        heading: "question 7",
        answer: "TESTTESTTESTTESTTESTTESTTESTTESTTEST",
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
    <div>
      <h1 > Frequently Asked Questions</h1>
      <div className = "faq-components">
        {faqs.map((faq,index) => (
          <div>
          <Faqitem faq = {faq} index = {index} faqtoggle = {faqtoggle}/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Faq;