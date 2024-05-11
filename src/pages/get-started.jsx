import React from 'react';
import Contact from '../components/Contact';
import Slider from '../components/Slider';
import '../styles.css';
import Img1 from '../images/get-started/img1.jpg';
import Img2 from '../images/get-started/img2.jpg';
import Img3 from '../images/get-started/img3.jpg';
import Img4 from '../images/get-started/img4.jpg';
import Img5 from '../images/get-started/img5.jpg';
import Img6 from '../images/get-started/img6.jpg';
import Img7 from '../images/get-started/img7.jpg';
import Img8 from '../images/get-started/img8.jpg';
import Img9 from '../images/get-started/img9.jpg';
import Img10 from '../images/get-started/img10.jpg';
import Img11 from '../images/get-started/img11.jpg';
import Img12 from '../images/get-started/img12.jpg';
import Img13 from '../images/get-started/img13.jpg';
import Img14 from '../images/get-started/img14.jpg';
import Img15 from '../images/get-started/img15.jpg';
import Img16 from '../images/get-started/img16.jpg';
import Img17 from '../images/get-started/img17.png';
import Img18 from '../images/get-started/img18.jpg';
import Img19 from '../images/get-started/img19.jpg';
import Img20 from '../images/get-started/img20.jpg';
import Img21 from '../images/get-started/img21.jpg';
import Img22 from '../images/get-started/img22.jpg';

function GetStarted() {
  const images = [
    Img1, Img2, Img3, Img4,
    Img5, Img6, Img7, Img8,
    Img9, Img10, Img11, Img12,
    Img13, Img14, Img15, Img16,
    Img17, Img18, Img19, Img20,
    Img21, Img22
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