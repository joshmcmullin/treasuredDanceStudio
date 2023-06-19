import React from 'react';
import {Link} from 'react-router-dom';
import HomeClassCard from '../components/HomeClassCard';
import BalletHomeImg from '../images/balletHomeImg.JPEG';
import JazzHomeImg from '../images/jazzHomeImg.JPEG';
import KidsHomeImg from '../images/kidsHomeImg.JPEG';
import AdultsHomeImg from '../images/adultsHomeImg.jpg';
import StudioFullShot from '../images/studioFullShot.jpg';
import StudioFullShot400w from '../images/studioFullShot_400w.jpg';
import StudioFullShot800w from '../images/studioFullShot_800w.jpg';
import StudioFullShot1200w from '../images/studioFullShot_1200w.jpg';
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
      <div className='home-studio-img-div'>
        {/* <img className='home-studio-img'src={StudioFullShot} alt='The studio'></img> */}
        <ResponsiveImage
          className='home-studio-img'
          srcSet={`
            ${StudioFullShot400w} 400w,
            ${StudioFullShot800w} 800w,
            ${StudioFullShot1200w} 1200w
          `}
          sizes='
            (max-width: 450px) 400px,
            (min-width: 451px) and (max-width: 1200px) 800px,
            (min-width: 1201px) 1200px 
          '
          alt='Dance Studio in Meridian'
        />
      </div>
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