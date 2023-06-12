import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Address</h3>
            <p>1735 W Chinden Blvd #120</p>
            <p>Meridian, ID 83646</p>
          </div>
          <div className="footer-section">
            <h3>Phone</h3>
            <p className='footer-phone-text'>
              <a href='tel:+12086174118'>(208) 617-4118</a>
            </p>
          </div>
          <div className="footer-section">
            <h3>Email</h3>
            <p>treasureddancestudio@gmail.com</p>
          </div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/get-started">Get Started</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/treasureddancestudio" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100090385672721" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className='copyright-div'>
        <p>© 2023 Treasured Dance Studio, LLC - All Rights Reserved</p>
      </div>   
    </>
  );
}

export default Footer;