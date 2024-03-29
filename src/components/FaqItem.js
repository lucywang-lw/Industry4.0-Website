import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import './FaqItem.css'

function Faqitem({ faq, index, faqtoggle }) {
  return (
    <div className = { "faq " + (faq.open ? 'faqopen': 'faqclosed')} 
          onClick={() => faqtoggle(index)}>
      <div className = "faq-heading">
        {faq.heading}
        <span className= "faq-arrow">
         <FontAwesomeIcon icon={faq.open ? faAngleUp : faAngleDown} />
        </span>
      </div>
     <div className = {"faq-answer " + (faq.open ? 'faq-open': 'faq-closed')}>{faq.answer}</div>
  </div>
  );
}

export default Faqitem;