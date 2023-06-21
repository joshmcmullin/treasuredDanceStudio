import React from 'react';
import ResponsiveImage from './ResponsiveImg';

function HomeClassCard(props) {
  return (
    <div className='home-class-img-div'>
      <ResponsiveImage
        src={props.image}
        avifSrcSet={props.avifSrcSet}
        webpSrcSet={props.webpSrcSet}
        alt={props.alt}
        sizes={props.sizes}
      />
      <p className='home-class-text'>{props.name}</p>
    </div>
  )
}

export default HomeClassCard;