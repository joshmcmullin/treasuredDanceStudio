import React from 'react';
import ClassCalendar from '../images/classCalendarNew.jpg';
import PointeImg from '../images/home/pointeImg.jpg';
import BalletImg from '../images/home/balletImg.jpg';
import JazzImg from '../images/home/jazzImg.jpg';
import KidsImg from '../images/home/kidsImg.jpg';
import LyricalImg from '../images/home/lyricalImg.jpg'
import HipHopImg from '../images/home/hiphopImg.jpg'
import PerformanceImg from '../images/home/performanceImg.jpg'
import BarreImg from '../images/home/barreImg.jpg';
import ImprovImg from '../images/home/improvImg.JPEG';
import ClassCard from '../components/ClassCard';
import {Link} from 'react-router-dom';

function Classes() {
  return (
    <div>
      <h1>Dance Classes</h1>
      <img className='class-calendar' src={ClassCalendar} alt='Daily Class Calendar'></img>
      <p className='class-intro-text'>
        We offer different dance classes for the different age groups. Each class is one time
        per week. Some classes have multiple timeslots for availability. There is a discount 
        for enrolling in more than one class, or for enrolling more than one dancer in our 
        classes.
      </p>
      <ClassCard 
        image={BalletImg}
        heading='Pre-ballet'
        age='5-7'
        price='$55-65 per month'
        firstTime='5-7: Tues 4:45 - 5:45pm'
        secondTime='5-7: Thurs 2:30 - 3:30pm'
        content="Pre-ballet description here."
      />
      <ClassCard 
        image={BalletImg}
        heading='Ballet'
        age='8+'
        price='$65 per month'
        firstTime='8-11: Tues 2:30 - 3:30pm'
        secondTime='8-11: Thurs 4:45 - 5:45pm'
        thirdTime='12-18: Mon 6:30 - 7:30pm'
        fourthTime='18+: Mon 8:35 - 9:35pm'
        content="Ballet is the core foundation for other dance styles. Here at Treasured
                Dance Studio we will use several ballet terms and guidelines to help our
                students gain the knowledge they need to succeed in dance. The flow of the 
                class: Barre, move to center accompanied by small and big jumps."
      />
      <ClassCard 
        image={PointeImg}
        heading='Pre-pointe/Pointe'
        age='12+'
        price='$30 per month'
        firstTime='12+: Mon 6:00 - 6:30pm'
        content="Pointe description here."
      />
      <ClassCard 
        image={JazzImg}
        heading='Jazz'
        age='6+'
        price='$65 per month'
        firstTime='6-11: Tues 6 - 7pm'
        secondTime='12-18: Mon 7:35 - 8:35pm'
        content="Jazz is all about energy, variety, and strength. We
                pair contemporary with jazz so dancers can learn 
                necessary variety through floor work, standing, isolation,
                jumps, and more. The flow of the class is such: Start with a full-body
                warm-up and stretch using dynamic and static stretching, across
                the floor and strengthening, and then a dance implementing
                what they've learned in class that day."
      />
      <ClassCard 
        image={KidsImg}
        heading='Preschool/Kids Combo'
        age='1.5 - 5'
        price='$45-55 per month'
        firstTime='1.5-3: Mon 4:15 - 4:45pm'
        secondTime='1.5-3: Sat 9:45 - 10:30am'
        thirdTime='3-5: Mon 4:45 - 5:30pm'
        fourthTime='3-5: Sat 9:45 - 10:30am'
        content="Kids combo! These classes are so fun for kids ranging in ages 
                from 1.5-5. The combo class includes a mixture of ballet and 
                acrobatic arts. In these classes students will learn body movement, 
                pathways, rhythm, and more in a safe and fun learning environment."
      />
      <ClassCard
        image={LyricalImg}
        heading='Lyrical/Contemporary'
        age='8+'
        price='$65 per month'
        firstTime='8-12: Fri 4:45 - 5:45pm'
        secondTime='12-18: Thurs 7:30 - 8:30pm'
        thirdTime='18+: Thurs 8:35 - 9:35pm'
        content="This is an expressive dance class where we take the smoothness of ballet
                mixed with the sharpness of jazz. This class will dive into emotions and 
                creating with our body. Due to the class taking a mixture of both ballet 
                and jazz, we recommend students in this class also be in either ballet or jazz.
                 The structure of this class is such: full-body warm up, strengthening, 
                 improv, center and floor work, and a dance."
      />
      <ClassCard 
        image={HipHopImg}
        heading='Hip Hop'
        age='3+'
        price='$45-65 per month'
        firstTime='3-5: Wed 3:00 - 4:00pm'
        secondTime='6-11: Thurs 6:00 - 7:00pm'
        thirdTime='12-18: Tues 7:30 - 8:30pm'
        fourthTime='18+: Tues 8:35 - 9:35pm'
        content="Hip hop is a vibrant and expressive dance that uses bounces and rocks.
                This class will dive into not only hip hop dance, but the culture as a whole!
                The structure is as follows: Full-body warm up, technique/strengthening, center
                and floorwork, improv, and a dance."
      />
      <ClassCard
        image={PerformanceImg}
        heading='Performance/Comp'
        age='10+'
        price='Price to be determined'
        firstTime='Time to be determined'
        content="Our performance/competition team is made up of dancers who want to 
                enter the competition and parade world! Dancers will train together and be placed
                into different available times based on groupings. The cost of the class depends
                on what competitions, intensives, and parades we participate in that term. We require 
                our competitive dancers to be taking an additional class through the studio."
      />
      <ClassCard
        image={BarreImg}
        heading='Barre Fitness'
        age='18+'
        price='$65 per month'
        firstTime='18+: Sat 8:00 - 8:45pm'
        content="American Barre Technique is a ballet inspired, low impact, aerobic class
                that fuses fluid balletic movements with small staccato actions to trigger
                hard-to-work muscles. ABT tones and sculpts the outer physique into a lean
                dancer's shape. This fitness class is perfect for women and men with
                various strength levels and can be taken at your own pace with an increase
                in difficulty or at a modified level. Increase your flexibility, tone and 
                tighten your physique, increase endurance, improve balance, and find a deeper
                sense of inner strength."
      />
      <ClassCard
        image={ImprovImg}
        heading='Improv'
        age='8+'
        price='$80 for 5 classes'
        firstTime='8+: Fri 6:00 - 7:00pm'
        content="Improv description here."
      />
      <div className='class-bottom-div'>
        <h2>Ready to get started?</h2>
        <Link className='class-bottom-div-link' to='/get-started'>Yes!</Link>
      </div>
    </div>
  )
}

export default Classes;