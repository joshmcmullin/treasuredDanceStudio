import React from 'react';

function HomeClassCard(props) {
  return (
    <div>
      <img className='home-class-img' src={props.image} alt={props.alt}></img>
      <p className='home-class-text'>{props.name}</p>
    </div>
  )
}

export default HomeClassCard;