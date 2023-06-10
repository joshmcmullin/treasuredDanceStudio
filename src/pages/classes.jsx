import React from 'react';
import ClassCalendar from '../images/ClassCalendar.jpg';
import BalletHomeImg from '../images/balletHomeImg.JPEG';
import JazzHomeImg from '../images/jazzHomeImg.JPEG';
import KidsHomeImg from '../images/kidsHomeImg.JPEG';
import ClassCard from '../components/ClassCard';
import {Link} from 'react-router-dom';

function Classes() {
  return (
    <div>
      <h1>Classes</h1>
      <img className='class-calendar' src={ClassCalendar} alt='Daily Class Calendar'></img>
      <ClassCard 
        image={BalletHomeImg}
        heading='Ballet/Lyrical'
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
        content="Kids combo! These classes are so fun for kids ranging in ages 
                from 2-6. The combo class includes a mixture of ballet and 
                acrobatic arts. In these classes students will learn body movement, 
                pathways, rhythm, and more in a safe and fun learning environment."
      />
      <div className='class-bottom-div'>
        <h2>Ready to get started?</h2>
        <Link className='class-bottom-div-link' to='/get-started'>Yes!</Link>
      </div>
    </div>
  )
}

export default Classes;