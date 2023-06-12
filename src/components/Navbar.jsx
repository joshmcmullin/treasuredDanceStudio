import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import CustomLink from './CustomLink';
import SiteLogo from '../images/logoFullShot.jpg';
import SiteLogo2 from '../images/logoFullShot2.jpg';
import LongLogo from '../images/logoLong.png';
import HamburgerIcon from '../images/hamburgerIcon.png';

function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navbarRef = useRef(null);

  function closeNav() {
    setIsNavExpanded(false);
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  return (
    <nav className='nav' ref={navbarRef}>
      {/* <Link to='/' className='site-title'> */}
        <img className='site-logo' src={SiteLogo2} alt='Treasured Dance Logo'/>
        {/* <img className='site-logo-long' src={LongLogo} alt='Treasured Dance Logo' /> */}
      {/* </Link> */}
      <button className='hamburger' onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
        <img className='hamburger-icon' src={HamburgerIcon} alt='hamburger icon'></img>
      </button>
      <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
        <ul>
          <CustomLink to='/' onClick={closeNav}>Home</CustomLink>
          <CustomLink to='/about' onClick={closeNav}>About</CustomLink>
          <CustomLink to='/classes' onClick={closeNav}>Classes</CustomLink>
          <CustomLink to='/get-started' onClick={closeNav}>Get Started</CustomLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;