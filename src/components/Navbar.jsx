import React, {useState, useEffect, useRef} from 'react';
import CustomLink from './CustomLink';
import SiteLogo from '../images/navbar/logoFullShot2.jpg';
import SiteLogoAVIF from '../images/navbar/logoFullShot2.avif';
import SiteLogoWEBP from '../images/navbar/logoFullShot2.webp';
import HamburgerIcon from '../images/navbar/hamburgerIcon_80w.png';
import HamburgerIconWEBP from '../images/navbar/hamburgerIcon_80w.webp';
import HamburgerIconAVIF from '../images/navbar/hamburgerIcon_80w.avif';
import ResponsiveImage from './ResponsiveImg';

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
      <ResponsiveImage 
          avifSrcSet={`
            ${SiteLogoAVIF} 451w
          `}
          webpSrcSet={`
            ${SiteLogoWEBP} 451w
          `}
          sizes="
            451px
          "
          src={SiteLogo}
          alt='Treasured Dance Studio'
        />
      <button className='hamburger' onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
        <ResponsiveImage 
          avifSrcSet={`
            ${HamburgerIconAVIF} 80w
          `}
          webpSrcSet={`
            ${HamburgerIconWEBP} 80w
          `}
          sizes="
            80px
          "
          src={HamburgerIcon}
          alt='Navbar hamburger icon'
        />
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