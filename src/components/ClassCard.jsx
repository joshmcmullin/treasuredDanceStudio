import React from 'react';

function ClassCard(props) {
  return (
    <div className='class-card-sub-div'>
      <div className='class-card-img-div'>
        <img className='class-card-img' src={props.image} alt='Class'></img>
      </div>
      <div className='class-card-text-div'>
        <h2>{props.heading}</h2>
        <h3>Ages {props.age}</h3>
        <h3>{props.price}</h3>
        <h3>{props.time}</h3>
        <p>{props.content}</p>
      </div>    
    </div>
  )
}

export default ClassCard;