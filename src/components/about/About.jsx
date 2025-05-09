import React from 'react'
import './about.css';
import AboutMe from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about-container">
            <div className="about-me">
              <div className="about-me-image">
                <img src={AboutMe} alt="" />
              </div>
            </div>
            <div className="about-content">
              <div className="cards">
                <article className='card'>
                  <FaAward className='aboutme-icon'/>
                  <h5>Experience</h5>
                  <small>2+ Years Working</small>
                </article>
                <article className='card'>
                  <MdOutlineMilitaryTech className='aboutme-icon'/>
                  <h5>Skills</h5>
                  <small>React,Javascript, .NET CORE, SQL</small>
                </article>
                <article className='card'>
                  <VscFolderLibrary className='aboutme-icon'/>
                  <h5>Projects</h5>
                  <small>10+ Completed</small>
                </article>
              </div>
              <p>I'm a Frontend Developer with 2 years of experience building dynamic web applications using React.js, React Native, and JavaScript. Currently, I'm expanding my skills in .NET and C# to become a full-stack developer. I focus on clean code, thrive in collaborative environments, 
                and am always eager to learn new technologies to create seamless, scalable web applications.</p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
