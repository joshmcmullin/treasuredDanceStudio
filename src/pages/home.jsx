import React from 'react';
import {Link} from 'react-router-dom';
import HomeClassCard from '../components/HomeClassCard';
import '../styles.css'
import ResponsiveImage from '../components/ResponsiveImg';
/* JPG, JPEG, PNG Images */
import StudioFullShot from '../images/home/studioFullShot.jpg';
import PreBalletImg from '../images/home/preBalletImg.jpg';
import PointeImg from '../images/home/pointeImg.jpg';
import BalletImg from '../images/home/balletImg.jpg';
import JazzImg from '../images/home/jazzImg.jpg';
import KidsImg from '../images/home/kidsImg.jpg';
import LyricalImg from '../images/home/lyricalImg.jpg';
import HipHopImg from '../images/home/hiphopImg.jpg';
import PerformanceImg from '../images/home/performanceImg.jpg';
import BarreImg from '../images/home/barreImg.jpg';
import ImprovImg from '../images/home/improvImg.JPEG';
import LocationImg from '../images/home/locationMap.png';
/* AVIF Images */
import StudioFullShot256wAVIF from '../images/home/studioFullShot_256w_AVIF.avif';
import StudioFullShot840wAVIF from '../images/home/studioFullShot_840w_AVIF.avif';
import StudioFullShot1160wAVIF from '../images/home/studioFullShot_1160w_AVIF.avif';
import StudioFullShot1400wAVIF from '../images/home/studioFullShot_1400w_AVIF.avif';
import StudioFullShot1610wAVIF from '../images/home/studioFullShot_1610w_AVIF.avif';
import StudioFullShot1800wAVIF from '../images/home/studioFullShot_1800w_AVIF.avif';
import StudioFullShot1930wAVIF from '../images/home/studioFullShot_1930w_AVIF.avif';
import StudioFullShot2048wAVIF from '../images/home/studioFullShot_2048w_AVIF.avif';
import PreBalletImgAVIF from '../images/home/preBalletImg.avif';
import PointeImgAVIF from '../images/home/pointeImg.avif';
import BalletImgAVIF from '../images/home/balletImg.avif';
import JazzImgAVIF from '../images/home/jazzImg.avif';
import KidsImgAVIF from '../images/home/kidsImg.avif';
import LyricalImgAVIF from '../images/home/lyricalImg.avif';
import HipHopImgAVIF from '../images/home/hiphopImg.avif';
import PerformanceImgAVIF from '../images/home/performanceImg.avif';
import BarreImgAVIF from '../images/home/barreImg.avif';
import ImprovImgAVIF from '../images/home/improvImg.avif';
import LocationImg256wAVIF from '../images/home/locationMap_256w.avif';
import LocationImg890wAVIF from '../images/home/locationMap_890w.avif';
import LocationImg1235wAVIF from '../images/home/locationMap_1235w.avif';
import LocationImg1540wAVIF from '../images/home/locationMap_1540w.avif';
import LocationImg1800wAVIF from '../images/home/locationMap_1800w.avif';
import LocationImg1930wAVIF from '../images/home/locationMap_1930w.avif';
import LocationImg2048wAVIF from '../images/home/locationMap_2048w.avif';
/* WEBP Images */
import StudioFullShot256wWEBP from '../images/home/studioFullShot_256w_WEBP.webp';
import StudioFullShot840wWEBP from '../images/home/studioFullShot_840w_WEBP.webp';
import StudioFullShot1160wWEBP from '../images/home/studioFullShot_1160w_WEBP.webp';
import StudioFullShot1400wWEBP from '../images/home/studioFullShot_1400w_WEBP.webp';
import StudioFullShot1610wWEBP from '../images/home/studioFullShot_1610w_WEBP.webp';
import StudioFullShot1800wWEBP from '../images/home/studioFullShot_1800w_WEBP.webp';
import StudioFullShot1930wWEBP from '../images/home/studioFullShot_1930w_WEBP.webp';
import StudioFullShot2048wWEBP from '../images/home/studioFullShot_2048w_WEBP.webp';
import LocationImg256wWEBP from '../images/home/locationMap_256w.webp';
import LocationImg890wWEBP from '../images/home/locationMap_890w.webp';
import LocationImg1235wWEBP from '../images/home/locationMap_1235w.webp';
import LocationImg1540wWEBP from '../images/home/locationMap_1540w.webp';
import LocationImg1800wWEBP from '../images/home/locationMap_1800w.webp';
import LocationImg1930wWEBP from '../images/home/locationMap_1930w.webp';
import LocationImg2048wWEBP from '../images/home/locationMap_2048w.webp';
import PreBalletImgWEBP from '../images/home/preBalletImg.webp';
import PointeImgWEBP from '../images/home/pointeImg.webp';
import BalletImgWEBP from '../images/home/balletImg.webp';
import JazzImgWEBP from '../images/home/jazzImg.webp';
import KidsImgWEBP from '../images/home/kidsImg.webp';
import LyricalImgWEBP from '../images/home/lyricalImg.webp';
import HipHopImgWEBP from '../images/home/hiphopImg.webp';
import PerformanceImgWEBP from '../images/home/performanceImg.webp';
import BarreImgWEBP from '../images/home/barreImg.webp';
import ImprovImgWEBP from '../images/home/improvImg.webp';

function Home() {
  return (
    <div>
      <h1 className='home-welcome-text'>Welcome to Treasured Dance Studio!</h1>
      <p className='home-welcome-content'>
        A premier dance studio located in Meridian, Idaho offering dance classes for 
        adults and kids 18 months and older.
      </p>
      <div className='home-studio-img-div'>
        <ResponsiveImage
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
            name='Pre Ballet'
            image={PreBalletImg}
            alt='Pre Ballet Class'
            avifSrcSet={`${PreBalletImgAVIF} 540w`}
            webpSrcSet={`${PreBalletImgWEBP} 540w`}
            sizes="540px"
          />
          <HomeClassCard 
            name='Ballet'
            image={BalletImg}
            alt='Ballet Class'
            avifSrcSet={`${BalletImgAVIF} 540w`}
            webpSrcSet={`${BalletImgWEBP} 540w`}
            sizes="540px"
          />
        </div>
        <div className='home-class-subcontainer'>
          <HomeClassCard 
            name='Pre/Pointe'
            image={PointeImg}
            alt='Pre/Pointe Class'
            avifSrcSet={`${PointeImgAVIF} 540w`}
            webpSrcSet={`${PointeImgWEBP} 540w`}
            sizes="540px"
          />
          <HomeClassCard 
            name='Jazz'
            image={JazzImg}
            alt='Jazz Class'
            avifSrcSet={`${JazzImgAVIF} 540w`}
            webpSrcSet={`${JazzImgWEBP} 540w`}
            sizes="540px"
          />
        </div>
        <div className='home-class-subcontainer'>
          <HomeClassCard 
            name='Preschool/Kids Combo'
            image={KidsImg}
            alt='Preschool/Kids Combo Class'
            avifSrcSet={`${KidsImgAVIF} 540w`}
            webpSrcSet={`${KidsImgWEBP} 540w`}
            sizes="540px"
          />
          <HomeClassCard 
            name='Lyrical/Contemporary'
            image={LyricalImg}
            alt='Lyrical/Contemporary Class'
            avifSrcSet={`${LyricalImgAVIF} 540w`}
            webpSrcSet={`${LyricalImgWEBP} 540w`}
            sizes="540px"
          />
        </div>
        <div className='home-class-subcontainer'>
          <HomeClassCard 
            name='Hip Hop'
            image={HipHopImg}
            alt='Hip Hop Class'
            avifSrcSet={`${HipHopImgAVIF} 540w`}
            webpSrcSet={`${HipHopImgWEBP} 540w`}
            sizes="540px"
          />
          <HomeClassCard
            name='Performance/Comp'
            image={PerformanceImg}
            alt='Performance/comp class'
            avifSrcSet={`${PerformanceImgAVIF} 540w`}
            webpSrcSet={`${PerformanceImgWEBP} 540w`}
            sizes="540px"
          />
        </div>
        <div className='home-class-subcontainer'>
          <HomeClassCard 
            name='Barre Fitness'
            image={BarreImg}
            alt='Barre Class'
            avifSrcSet={`${BarreImgAVIF} 540w`}
            webpSrcSet={`${BarreImgWEBP} 540w`}
            sizes="540px"
          />
          <HomeClassCard
            name='Improv'
            image={ImprovImg}
            alt='Improv class'
            avifSrcSet={`${ImprovImgAVIF} 540w`}
            webpSrcSet={`${ImprovImgWEBP} 540w`}
            sizes="540px"
          />
        </div>
      </div>
      <div className='home-bottom-div'>
        <p>
          We have classes everyday except Sunday. Kids classes start 
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
        <p>We are located inside Cherry Plaza Center Meridian on Fairview
          and Meridian!
        </p>
        <p>
          58 E Fairview Ave, Meridian, ID 83646.
        </p>
      </div>
      <div className='home-location-img-div'>
        {/* <ResponsiveImage 
          avifSrcSet={`
            ${LocationImg256wAVIF} 256w,
            ${LocationImg890wAVIF} 890w,
            ${LocationImg1235wAVIF} 1235w,
            ${LocationImg1540wAVIF} 1540w,
            ${LocationImg1800wAVIF} 1800w,
            ${LocationImg1930wAVIF} 1930w,
            ${LocationImg2048wAVIF} 2048w
          `}
          webpSrcSet={`
            ${LocationImg256wWEBP} 256w,
            ${LocationImg890wWEBP} 890w,
            ${LocationImg1235wWEBP} 1235w,
            ${LocationImg1540wWEBP} 1540w,
            ${LocationImg1800wWEBP} 1800w,
            ${LocationImg1930wWEBP} 1930w,
            ${LocationImg2048wWEBP} 2048w
          `}
          sizes="
            (min-width: 1560px) 60vw,
            (min-width: 1200px) 70vw,
            80vw 
          "
          src={LocationImg}
          alt='Dance studio located in Meridian, Idaho'
        /> */}
      </div>
    </div>
  )
}

export default Home;