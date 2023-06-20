import React from 'react';
import {Link} from 'react-router-dom';
import HomeClassCard from '../components/HomeClassCard';
import BalletHomeImg from '../images/balletHomeImg.JPEG';
import JazzHomeImg from '../images/jazzHomeImg.JPEG';
import KidsHomeImg from '../images/kidsHomeImg.JPEG';
import AdultsHomeImg from '../images/adultsHomeImg.jpg';
/* JPG Images */
import StudioFullShot from '../images/studioFullShot.jpg';
import StudioFullShot256w from '../images/studioFullShot_256w.jpg';
import StudioFullShot840w from '../images/studioFullShot_840w.jpg';
import StudioFullShot1160w from '../images/studioFullShot_1160w.jpg';
import StudioFullShot1400w from '../images/studioFullShot_1400w.jpg';
import StudioFullShot1610w from '../images/studioFullShot_1610w.jpg';
import StudioFullShot1800w from '../images/studioFullShot_1800w.jpg';
import StudioFullShot1930w from '../images/studioFullShot_1930w.jpg';
import StudioFullShot2048w from '../images/studioFullShot_2048w.jpg';
/* AVIF Images */
import StudioFullShot256wAVIF from '../images/studioFullShot_256w_AVIF.avif';
import StudioFullShot840wAVIF from '../images/studioFullShot_840w_AVIF.avif';
import StudioFullShot1160wAVIF from '../images/studioFullShot_1160w_AVIF.avif';
import StudioFullShot1400wAVIF from '../images/studioFullShot_1400w_AVIF.avif';
import StudioFullShot1610wAVIF from '../images/studioFullShot_1610w_AVIF.avif';
import StudioFullShot1800wAVIF from '../images/studioFullShot_1800w_AVIF.avif';
import StudioFullShot1930wAVIF from '../images/studioFullShot_1930w_AVIF.avif';
import StudioFullShot2048wAVIF from '../images/studioFullShot_2048w_AVIF.avif';
/* WEBP Images */
import StudioFullShot256wWEBP from '../images/studioFullShot_256w_WEBP.webp';
import StudioFullShot840wWEBP from '../images/studioFullShot_840w_WEBP.webp';
import StudioFullShot1160wWEBP from '../images/studioFullShot_1160w_WEBP.webp';
import StudioFullShot1400wWEBP from '../images/studioFullShot_1400w_WEBP.webp';
import StudioFullShot1610wWEBP from '../images/studioFullShot_1610w_WEBP.webp';
import StudioFullShot1800wWEBP from '../images/studioFullShot_1800w_WEBP.webp';
import StudioFullShot1930wWEBP from '../images/studioFullShot_1930w_WEBP.webp';
import StudioFullShot2048wWEBP from '../images/studioFullShot_2048w_WEBP.webp';
import LocationImg from '../images/locationMap.png';
import '../styles.css'
import ResponsiveImage from '../components/ResponsiveImg';

function Home() {
  return (
    <div>
      <h1 className='home-welcome-text'>Welcome to Treasured Dance Studio!</h1>
      <p className='home-welcome-content'>
        A premier dance studio located in Meridian, Idaho offering dance classes for 
        adults and kids ages 2+.
      </p>
        <ResponsiveImage
          className='home-studio-img-div'
          avifSrcSet={`
            ${StudioFullShot256wAVIF} 256w,
            ${StudioFullShot840wAVIF} 840w,
            ${StudioFullShot1160wAVIF} 1160w,
            ${StudioFullShot1400wAVIF} 1400w,
            ${StudioFullShot1610wAVIF} 1610w,
            ${StudioFullShot1800wAVIF} 1800w,
            ${StudioFullShot1930wAVIF} 1930w,
            ${StudioFullShot2048wAVIF} 2048w
          `}
          webpSrcSet={`
            ${StudioFullShot256wWEBP} 256w,
            ${StudioFullShot840wWEBP} 840w,
            ${StudioFullShot1160wWEBP} 1160w,
            ${StudioFullShot1400wWEBP} 1400w,
            ${StudioFullShot1610wWEBP} 1610w,
            ${StudioFullShot1800wWEBP} 1800w,
            ${StudioFullShot1930wWEBP} 1930w,
            ${StudioFullShot2048wWEBP} 2048w
          `}
          sizes="
            (min-width: 1560px) 60vw,
            (min-width: 1200px) 70vw,
            80vw 
          "
          src={StudioFullShot}
          alt='Dance Studio in Meridian'
        />
      <hr className='home-hr'/>
      <div className='home-motto-div'>
        <h2>I am Treasured. You are Treasured. We are Treasured.</h2>
        <h3>- Our Motto</h3>
      </div>
      <hr className='home-hr'/>
      <h2 className='home-class-title'>Classes We Offer</h2>
      <div className='home-class-container'>
        <div className='home-class-subcontainer'>
          <HomeClassCard 
            name='Ballet/Lyrical'
            image={BalletHomeImg}
            alt='Group of ballet dancers posing in black leotards'
          />
          <HomeClassCard 
            name='Jazz/Contemporary'
            image={JazzHomeImg}
            alt='Group of 4 pairs of feet posing in contemporary way'
          />
        </div>
        <div className='home-class-subcontainer'>
          <HomeClassCard 
            name='Kids Combo'
            image={KidsHomeImg}
            alt='Children and instructor in a circle with hands raised cheering'
          />
          <HomeClassCard
            name='Adult Dance'
            image={AdultsHomeImg}
            alt='Adult dance class'
          />
        </div>
      </div>
      <div className='home-bottom-div'>
        <p>
          We have classes Monday, Tuesday, Thursday, and Saturday each week. Kids classes start 
          at $45 a month, and adult classes start at $65 a month. Dancers taking more than one 
          class or parents enrolling more than one dancer receive discounts. See more about pricing
          and classes below.
        </p>
        <Link className='home-bottom-div-link' to='/classes'>Discover Your Class Now</Link>
        <hr className='home-hr-2'></hr>
        <p>Wondering how to get started?</p>
        <Link className='home-bottom-div-link' to='/get-started'>Get Started Now</Link>
      </div>
      <div className='home-address-div'>
        <h2>Come Visit Us</h2>
        <p>We are located inside EnVie Fitness Studio in Meridian on Linder
          and Chinden!
        </p>
        <p>
          1735 W Chinden Blvd #120, Meridian, ID 83646.
        </p>
      </div>
      <div className='home-location-img-div'>
        <img 
          src={LocationImg}
          alt='Location of studio'
          className='home-location-img'
        ></img>
      </div>
    </div>
  )
}

export default Home;