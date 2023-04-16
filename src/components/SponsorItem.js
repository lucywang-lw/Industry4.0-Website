import React from "react";
import "../components/Sponsor.css";

function SponsorItem({ image, name, id}) {
  return (
    <div className="SponsorItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1> 
    </div>
  );
}

export default SponsorItem;