import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}

export default Card
