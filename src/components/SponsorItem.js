import React from "react";
import "./SponsorItem.css";

function SponsorItem({ image, name, id}) {
  return (
    <div className="SponsorItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1 className="sponsor-name"> {name} </h1> 
    </div>
  );
}

export default SponsorItem;