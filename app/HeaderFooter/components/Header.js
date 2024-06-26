import React from 'react';
import Image from 'next/image';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <Image src={logo} alt="Logo" width={50} height={50} className="header-image" />
      <div className="header-text">Who Are We?</div>
      <div className="header-text">Events</div>
      <div className="header-text">Resources For Students</div>
      <div className="header-text">Partnerships</div>
      <div className="header-text">Our Team</div>
      <div className="header-text">Contact Us</div>
    </div>
  );
}

export default Header;