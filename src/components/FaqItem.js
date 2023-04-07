import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Faqitem({ faq, index, faqtoggle }) {
  return (
    <div  className = { "faq" + (faq.open ? 'open': '')} 
          key = {index} 
          onClick={() => faqtoggle(index)}>
      <div className = "faq-heading">
        {faq.heading}
      </div>
        <div className= "faq-arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      <div className = "faq-answer">
        {faq.answer}
      </div>
  </div>
  );
}

export default Faqitem;