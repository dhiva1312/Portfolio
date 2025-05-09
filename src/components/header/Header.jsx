import React from 'react'
import CTA from './CTA'
import ProfilePic from '../../assets/me.png'
import Headersocials from './Headersocials'
import './header.css';
const Header = () => {
  return (
    <header>
        <div className="container header-container">
            <h5 className='name'>Hello I'm</h5>
            <div class="content">
  <h1 class="title">Dhivakar
    <div class="aurora">
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
    </div>
  </h1>
  
</div>
            <h5 className="text-light typewriter">Frontend Developer</h5>
            <CTA/>
            <Headersocials/>
            <div className="me">
                <img src={ProfilePic} alt="profile" />
            </div>
            <a href="#contact" className='Scroll-down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
