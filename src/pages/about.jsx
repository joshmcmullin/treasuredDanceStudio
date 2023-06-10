import React from 'react';
import AboutSection from '../components/AboutSection';
import MissEmilyImg from '../images/missEmily.jpg';
import FullLogoImg from '../images/FullLogo.PNG';
import '../styles.css';

function About() {
  return (
    <div>
      <h1>About</h1>
      <AboutSection 
        image={MissEmilyImg}
        heading='Meet Miss Emily'
        content="She has a wonderful husband and baby boy! She has
                been a dance coach for 9 years, along with several
                years of cheer experience. She is also American Barre
                Technique certified to help teach strength and
                flexibility. Her favorite style of dance is Jazz, but
                she has been studying several others such as lyrical,
                contemporary, ballet, and pom for multiple years. 
                Opening a studio has been a goal of Emily's and bringing
                Treasured Dance Studio to light has brought her tremendous
                joy."
      />
      <AboutSection 
        image={FullLogoImg}
        heading='About Treasured Dance Studio'
        content='Treasured Dance Studio was named after seeing a need
                in the dance community for dancers and students alike
                to know that they are treasured and valued. The importance
                of students finding joy within themselves and something they
                like doing is priority. Instead of thinking negatively, they
                are encouraged to find positivity within themselves every 
                class.'
      />
    </div>
  )
}

export default About;