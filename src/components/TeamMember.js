import React from 'react'
import "./TeamMember.css"

function TeamMember(props) {
  console.log(props);
  return (
    <div className="teamcard">
        <img className="team-img" src={props.image.image} alt={props.image.desc} />
        <div className="description">
          <div className="name">{props.image.name}</div>
          <div className="position">{props.image.role}</div>
        </div>
    </div>
  )
}

export default TeamMember