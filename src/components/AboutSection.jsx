import React from 'react';

function AboutSection(props) {
  return (
    <div className='about-sub-div'>
      <div className='about-img-div'>
        <img className='about-img' src={props.image} alt='Teacher/Studio'></img>
      </div>
      <div className='about-text-div'>
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </div>    
    </div>
  )
}

export default AboutSection;