import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='logo'>DhivaWeb</a>
       <ul class="footer-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#experience">Experiences</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact Us</a></li>
  </ul>

  <div className='social-media'>
    <a href="https://www.instagram.com/dhivakar_45/"><FaInstagram/></a>
    <a href="https://www.linkedin.com/in/dhivakardhiva/"><FaLinkedin/></a>
    <a href="https://x.com/DhivakarV_1312"><FaTwitter/></a>
  </div>
  <div className='footer-copyright'>
    <small >&copy; 2025 Dhivakar. All rights reserved.</small>
  </div>
    </footer>
  )
}

export default Footer
