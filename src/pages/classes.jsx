import React from 'react';
import ClassCalendar from '../images/ClassCalendar.jpg';
import BalletHomeImg from '../images/balletHomeImg.JPEG';
import JazzHomeImg from '../images/jazzHomeImg.JPEG';
import KidsHomeImg from '../images/kidsHomeImg.JPEG';
import AdultsHomeImg from '../images/adultsHomeImg.jpg';
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
        heading='Ballet/Lyrical'
        age='7+'
        price='$65 per month'
        time='Monday 7:30 - 8:30pm'
        content="Ballet is a core foundation for other dance styles. Here at 
                Treasured Dance Studio we will use several ballet terms and guidelines 
                to help our students gain the knowledge they need to succeed in dance. 
                The flow of the class is such: Start at the barre, add in strenghtening, 
                center work, and finally a dance implementing what was learned in class 
                that day."
      />
      <ClassCard 
        image={JazzHomeImg}
        heading='Jazz/Contemporary'
        age='7+'
        price='$65 per month'
        time='Tuesday 7:30 - 8:30pm'
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
        age='2-6'
        price='$45 or 55 per month (2-3 or 4-6)'
        time='Saturday 11:30am - 12:30pm'
        content="Kids combo! These classes are so fun for kids ranging in ages 
                from 2-6. The combo class includes a mixture of ballet and 
                acrobatic arts. In these classes students will learn body movement, 
                pathways, rhythm, and more in a safe and fun learning environment."
      />
      <ClassCard
        image={AdultsHomeImg}
        heading='Adult Dance'
        age='18+'
        price='$65 per month'
        time='Thursday 7:30 - 8:30pm'
        content="Adult dance is for those 18+ who want to keep dancing to their hearts
                content. We will study genres like ballet, jazz, contemporary, and lyrical. 
                It is our philosophy that dance is for all ages. Each class will start
                with a body warm up and exercise, move into an across the floor section,
                and finish with a dance."
      />
      <div className='class-bottom-div'>
        <h2>Ready to get started?</h2>
        <Link className='class-bottom-div-link' to='/get-started'>Yes!</Link>
      </div>
    </div>
  )
}

export default Classes;