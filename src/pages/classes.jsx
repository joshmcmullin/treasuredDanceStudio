import React from 'react';
import ClassCalendar from '../images/classCalendarNew.jpeg';
import PreBalletImg from '../images/home/preBalletImg.jpg';
import PointeImg from '../images/home/pointeImg.jpg';
import BalletImg from '../images/home/balletImg.jpg';
import JazzImg from '../images/home/jazzImg.jpg';
import PreschoolImg from '../images/home/preschoolImg.jpg';
import KidsComboImg from '../images/home/kidsComboImg.jpg';
import LyricalImg from '../images/home/lyricalImg.jpg'
import HipHopImg from '../images/home/hiphopImg.jpg'
import PerformanceImg from '../images/home/performanceImg.jpg'
import BarreImg from '../images/home/barreImg.jpg';
import PomImg from '../images/home/pomImg.jpg';
import ImprovImg from '../images/home/improvImg.JPEG';
import ClassCard from '../components/ClassCard';
import {Link} from 'react-router-dom';

function Classes() {
  return (
    <div>
      <h1>Dance Classes</h1>
      <img className='class-calendar' src={ClassCalendar} alt='Daily Class Calendar'></img>
      <p className='class-intro-text'>
        We offer different dance classes for the different age groups. Each class is once 
        per week. Some classes have multiple timeslots for availability. There is a discount 
        for enrolling in more than one class, or for enrolling more than one dancer in our 
        classes.
      </p>
      <ClassCard 
        image={PreBalletImg}
        heading='Pre Ballet'
        age='5-7'
        price='$55-65 per month'
        firstTime='5-7: Tues 4:45 - 5:45pm'
        secondTime='5-7: Thurs 2:30 - 3:30pm'
        content="Pre Ballet is the class right before students jump into the world 
        full of dance! This class is essential for our young ones as from this 
        class they can venture into any genre of dance they would like to go into 
        and have the core foundation of dance."
      />
      <ClassCard 
        image={BalletImg}
        heading='Ballet'
        age='8+'
        price='$65 per month'
        firstTime='8-11: Tues 2:30 - 3:30pm'
        secondTime='8-11: Thurs 4:45 - 5:45pm'
        thirdTime='8-11: Wed 6:30 - 7:30pm'
        fourthTime='12-18: Thurs 7:30 - 8:30pm'
        fifthTime='18+: Tues 8:35 - 9:35pm'
        content="Ballet is the core foundation for other dance styles. Here at Treasured
                Dance Studio we will use several ballet terms and guidelines to help our
                students gain the knowledge they need to succeed in dance. The flow of the 
                class: Barre, move to center accompanied by small and big jumps."
      />
      <ClassCard 
        image={PointeImg}
        heading='Pre/Pointe'
        age='12+'
        price='$30 per month'
        firstTime='12+: Thurs 7:00 - 7:30pm'
        content="Pre/Pointe is for those dancers aspiring to learn how to dance on 
        pointe. This is an introductory class where dancers will build up strength 
        and muscle to be able to dance on pointe. Dancers must be evaluated by our 
        pointe instructor before going onto pointe. Dancers will need to be in 
        proper ballet attire for this class. "
      />
      <ClassCard 
        image={JazzImg}
        heading='Jazz'
        age='6+'
        price='$65 per month'
        firstTime='6-11: Tues 6 - 7pm'
        secondTime='12-18: Mon 7:35 - 8:35pm'
        thirdTime='12-18: Wed 5:15 - 6:15pm'
        fourthTime='18+: Wed 8:30 - 9:30pm'
        content="Jazz is all about energy, variety, and strength. We
                pair contemporary with jazz so dancers can learn 
                necessary variety through floor work, standing, isolation,
                jumps, and more. The flow of the class is such: Start with a full-body
                warm-up and stretch using dynamic and static stretching, across
                the floor and strengthening, and then a dance implementing
                what they've learned in class that day."
      />
      <ClassCard 
        image={PreschoolImg}
        heading='Preschool'
        age='1.5 - 3'
        price='$45 per month'
        firstTime='1.5-3: Mon 4:15 - 4:45pm'
        secondTime='1.5-3: Sat 9:45 - 10:30am'
        content="This is a fun and upbeat class for those littles who want to start 
        dance! Our little dancers will start to learn dance and movement through 
        story telling and imagination. "
      />
      <ClassCard 
        image={KidsComboImg}
        heading='Kids Combo'
        age='3 - 5'
        price='$55 per month'
        firstTime='3-5: Mon 4:45 - 5:30pm'
        secondTime='3-5: Sat 9:45 - 10:30am'
        content="Kids combo! These classes are so fun for kids ranging in ages 
                from 3-5. The combo class includes a mixture of ballet and 
                acrobatic arts. In these classes students will learn body movement, 
                pathways, rhythm, and more in a safe and fun learning environment."
      />
      <ClassCard
        image={LyricalImg}
        heading='Lyrical/Contemporary'
        age='8+'
        price='$65 per month'
        firstTime='8-12: Fri 4:45 - 5:45pm'
        secondTime='12-18: Mon 7:30 - 8:30pm'
        thirdTime='18+: Thurs 8:35 - 9:35pm'
        content="This is an expressive dance class where we take the smoothness of ballet
                mixed with the sharpness of jazz. This class will dive into emotions and 
                creating with our body. Due to the class taking a mixture of both ballet 
                and jazz, we recommend students in this class also be in either ballet or jazz."
      />
      <ClassCard 
        image={HipHopImg}
        heading='Hip Hop'
        age='3+'
        price='$55-65 per month'
        firstTime='3-5: Wed 3:15 - 4:00pm'
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
        price='$25-40/hr and fees'
        firstTime='Time based on private lesson availability'
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
        image={PomImg}
        heading='Pom'
        age='8+'
        price='$65 per month'
        firstTime='8+: Mon 8:30 - 9:30pm'
        content="This is a class where cheerleading and dance meet. The movements are sharp 
        and precise while working through dance. There will be a mixture of cheer and dance 
        language used. This is an upbeat and high energy class! "
      />
      <ClassCard
        image={ImprovImg}
        heading='Improv'
        age='8+'
        price='$55 for 4 classes'
        firstTime='8+: Fri 6:45 - 7:45pm'
        content="Improv is a once a month class that teaches students how to express themselves 
        through music. Where students will learn how to let their body flow through motions with 
        meaning and using the space around them."
      />
      <div className='class-bottom-div'>
        <h2>Ready to get started?</h2>
        <Link className='class-bottom-div-link' to='/get-started'>Yes!</Link>
      </div>
    </div>
  )
}

export default Classes;