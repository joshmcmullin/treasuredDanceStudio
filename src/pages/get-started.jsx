import React from 'react';
import Contact from '../components/Contact';
import '../styles.css';

function GetStarted() {
  return (
    <div className='get-started-outer'>
      <h1>Get Started</h1>
      <p>
        To schedule a <strong>FREE</strong> class, call us at  
         (208) 617-4118 or fill out the
        form below and we will give you a call!
      </p>
      <Contact />
      <div className='get-started-info-div'>
        <h2>What should you bring to class?</h2>
        <h3>Ballet/Lyrical</h3>
        <ul>
          <li>Leotard of any color</li>
          <li>Tights</li>
          <li>Ballet slippers</li>
          <li>Shorts, skirts, or leggings may be worn
              over the leotard</li>
          <li>Hair up and out of face</li>
          <li>Water bottle</li>
        </ul>
        <h3>Jazz/Contemporary</h3>
        <ul>
          <li>Leggings</li>
          <li>Shirt or tank that you can move in</li>
          <li>Jazz shoes</li>
          <li>Hair up and out of face</li>
          <li>Water bottle</li>
        </ul>
        <h3>Kids Combo</h3>
        <ul>
          <li>Leggings, shorts and t-shirt, or leotard</li>
          <li>Tights are optional with a leotard</li>
          <li>Ballet slippers</li>
          <li>Water bottle with name on it</li>
          <li>Hair up and out of face</li>
        </ul>
        <h3>Adult Dance</h3>
        <ul>
          <li>Clothes that you can move and feel comfortable in</li>
          <li>Jazz shoes or ballet slippers</li>
          <li>Water bottle</li>
          <li>Hair up and out of face</li>
        </ul>
      <p>
        Due to using space at a studio, we cannot 
        have bare feet or half-sole shoes. We want to respect the 
        facilities, so please come in proper class attire.
      </p>
      </div>
    </div>
  )
}

export default GetStarted;