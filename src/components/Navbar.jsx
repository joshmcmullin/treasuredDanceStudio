import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CustomLink from './CustomLink';
import SiteLogo from '../images/logoFullShot.jpg';
import AdjSiteLogo from '../images/croppedLogoFullShot.jpg';
import HamburgerIcon from '../images/hamburgerIcon.png';

function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        <img className='site-logo' src={SiteLogo} alt='Treasured Dance Logo'/>
      </Link>
      <button className='hamburger' onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
        <img className='hamburger-icon' src={HamburgerIcon} alt='hamburger icon'></img>
      </button>
      <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
        <ul>
          <CustomLink to='/about'>About</CustomLink>
          <CustomLink to='/classes'>Classes</CustomLink>
          <CustomLink to='/get-started'>Get Started</CustomLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;