import React from 'react';
import {Link} from 'react-router-dom';
import HomeClassCard from '../components/HomeClassCard';
import BalletHomeImg from '../images/balletHomeImg.JPEG';
import JazzHomeImg from '../images/jazzHomeImg.JPEG';
import KidsHomeImg from '../images/kidsHomeImg.JPEG';
import StudioFullImg from '../images/studioFullShot.jpg';
import LocationImg from '../images/locationMap.png';
import '../styles.css'

function Home() {
  return (
    <div>
      <h1 className='home-welcome-text'>Welcome to Treasured Dance Studio!</h1>
      <p className='home-welcome-content'>
        A premier dance studio located in Meridian, Idaho offering dance classes for 
        ages 4+.
      </p>
      <div className='home-studio-img-div'>
        <img className='home-studio-img'src={StudioFullImg} alt='The studio'></img>
      </div>
      <hr className='home-hr'/>
      <div className='home-motto-div'>
        <h2>I am Treasured. You are Treasured. We are Treasured.</h2>
        <h3>- Our Motto</h3>
      </div>
      <hr className='home-hr'/>
      <h2 className='home-class-title'>Classes</h2>
      <div className='home-class-container'>
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
        <HomeClassCard 
          name='Kids Combo'
          image={KidsHomeImg}
          alt='Children and instructor in a circle with hands raised cheering'
        />
      </div>
      <div className='home-bottom-div'>
        <p>We have classes Monday, Tuesday, Thursday, and Saturday each week.</p>
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