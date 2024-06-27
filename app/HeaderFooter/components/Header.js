import React from 'react';
import Image from 'next/image';
import './Header.css';
import logo from '../assets/logo_1.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-image-container">
        <Image src={logo} alt="Logo" className="header-image" />
      </div>
      <div className="header-text-container">
        <div className="header-text">Who Are We</div>
        <div className="header-text">Events</div>
        <div className="header-text">Resources For Students</div>
        <div className="header-text">Partnerships</div>
        <div className="header-text">Our Team</div>
      </div>
      <div className="contact-us-container">
        <div className="header-text">Contact Us</div>
      </div>
    </div>
  );
}

export default Header;
