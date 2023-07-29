import React from 'react';
import ClassCalendar from '../images/ClassCalendar.jpg';
import BalletHomeImg from '../images/home/balletHomeImg.JPEG';
import JazzHomeImg from '../images/home/jazzHomeImg.JPEG';
import KidsHomeImg from '../images/home/kidsHomeImg.JPEG';
import AdultsHomeImg from '../images/home/adultsHomeImg.jpg';
import LyricalHomeImg from '../images/home/lyricalHomeImg.png'
import ClassCard from '../components/ClassCard';
import {Link} from 'react-router-dom';

function Classes() {
  return (
    <div>
      <h1>Dance Classes</h1>
      <img className='class-calendar' src={ClassCalendar} alt='Daily Class Calendar'></img>
      <p className='class-intro-text'>
        We offer different dance classes for the different age groups. There is
        a discount for enrolling in more than one class, or for enrolling more
        than one dancer in our classes.
      </p>
      <ClassCard 
        image={BalletHomeImg}
        heading='Ballet'
        age='7+'
        price='$65 per month'
        firstTime='Pre/Teens - Mon 7:30 - 8:30pm'
        secondTime='Adults - Thurs 8:35 - 9:35pm'
        content="Ballet is the core foundation for other dance styles. Here at Treasured
                Dance Studio we will use several ballet terms and guidelines to help our
                students gain the knowledge they need to succeed in dance. The flow of the 
                class is such: Start at the barre, add in strengthening and center work, 
                small jumps and little jumps."
      />
      <ClassCard 
        image={JazzHomeImg}
        heading='Jazz'
        age='7+'
        price='$65 per month'
        firstTime='Pre/Teens - Tues 7:30 - 8:30pm'
        secondTime='Adults - Tues 8:35 - 9:35pm'
        content="Jazz is all about energy, variety, and strength. We
                pair contemporary with jazz so dancers can learn 
                necessary variety through floor work, standing, isolation,
                jumps, and more. The flow of the class is such: Start with a full-body
                warm-up and stretch using dynamic and static stretching, across
                the floor and strengthening, and then a dance implementing
                what they've learned in class that day."
      />
      <ClassCard 
        image={KidsHomeImg}
        heading='Kids Combo'
        age='3-6'
        price='$45 or 55 per month (3 or 4-6)'
        firstTime='Saturday 11:30am - 12:30pm'
        content="Kids combo! These classes are so fun for kids ranging in ages 
                from 3-6. The combo class includes a mixture of ballet and 
                acrobatic arts. In these classes students will learn body movement, 
                pathways, rhythm, and more in a safe and fun learning environment."
      />
      <ClassCard
        image={LyricalHomeImg}
        heading='Lyrical/Contemporary'
        age='7+'
        price='$65 per month'
        firstTime='Pre/Teens - Thurs 7:30 - 8:30pm'
        secondTime='Adults - Mon 8:35 - 9:35pm'
        content="This is an expressive dance class where we take the smoothness of ballet
                mixed with the sharpness of jazz. This class will dive into emotions and 
                creating with our body. Due to the class taking a mixture of both ballet 
                and jazz, we recommend students in this class also be in either ballet or jazz.
                 The structure of this class is such: full-body warm up, strengthening, 
                 improv, center and floor work, and a dance."
      />
      <div className='class-bottom-div'>
        <h2>Ready to get started?</h2>
        <Link className='class-bottom-div-link' to='/get-started'>Yes!</Link>
      </div>
    </div>
  )
}

export default Classes;