import React from 'react';
import Contact from '../components/Contact';
import Slider from '../components/Slider';
import '../styles.css';
import BalletImg from '../images/get-started/balletImg.jpg';
import HipHopImg from '../images/get-started/hiphopImg.jpg';
import JazzImg from '../images/get-started/jazzImg.jpg';
import KidsImg from '../images/get-started/kidsImg.jpg';
import LyricalImg from '../images/get-started/lyricalImg.jpg';

function GetStarted() {
  const images = [
    BalletImg,
    HipHopImg,
    JazzImg,
    KidsImg,
    LyricalImg
  ];
  return (
    <div className='get-started-outer'>
      {/* <h1>Get Started</h1> */}
      <h1>Are you ready to get your body moving and creativity flowing?</h1>
      <Slider images={images} />
      <p>
        Schedule a <strong>FREE</strong> week long trial to see which class
        or classes are best for you! Call/text (we love text) us at (208) 617-4119
        or fill in the info below and we will give you a call!
      </p>
      <Contact />
      <div className='get-started-info-div'>
        <h2>What should you bring to class?</h2>
        <h3>Ballet</h3>
        <ul>
          <li>Leotard of any color</li>
          <li>Tights</li>
          <li>Ballet slippers</li>
          <li>Shorts, skirts, or leggings may be worn
              over the leotard</li>
          <li>Hair up and out of face</li>
          <li>Water bottle</li>
        </ul>
        <h3>Jazz/Lyrical/Contemporary</h3>
        <ul>
          <li>Leggings</li>
          <li>Shirt or tank that you can move in</li>
          <li>Jazz shoes or ballet slippers</li>
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
      <p>We can't wait to see you in class!</p>
      </div>
    </div>
  )
}

export default GetStarted;