import React from 'react';
import AboutSection from '../components/AboutSection';
import MissEmilyImg from '../images/about/emilyImg.jpg';
import MissHannahImg from '../images/about/hannahImg.jpg';
import MissKaitlynImg from '../images/about/kaitlynImg.jpg';
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
                years of cheer experience. She is American Barre
                Technique certified to help teach strength and
                flexibility. She is also certified through Once Upon a Ballet.
                Her favorite style of dance is Jazz, but she has been studying 
                several others such as lyrical, contemporary, ballet, and pom 
                for multiple years. Opening a studio has been a goal of Emily's 
                and bringing Treasured Dance Studio to light has brought her 
                tremendous joy."
      />
      <AboutSection
        image={MissHannahImg}
        heading='Meet Miss Hannah'
        content="She started taking dance classes when she was 8 years old.
                Before taking classes, she absolutely loved dancing and 
                found herself choreographing to songs in her living room. 
                She has experience in hip-hop, contemporary, jazz, lyrical, 
                and ballet. At the age of 11 hip-hop won her heart! Along 
                with taking classes, she was on an award-winning competition 
                team and was honored to share the title of captain her senior 
                year. Her goal is to show her students the joy of dancing
                and create a positive space where we can work on being 
                confident in our own abilities! She is so excited for the 
                opportunity to teach at Treasured Dance and to meet all her 
                students!"
      />
      <AboutSection
        image={MissKaitlynImg}
        heading='Meet Miss Kaitlyn'
        content="She is someone who has loved the art of dance since the age
                of 7. She has experience in teaching ballet, jazz, color guard,
                and has helped choreograph several dance in plays and musical
                theatre. Teaching is her passion and dance is her love! She is 
                also a small business owner of a local coffee shop that she 
                started with her dad. She cannot wait to share her love of dance
                with her students!"
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