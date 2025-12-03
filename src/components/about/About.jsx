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
                  <small>1+ Years Working</small>
                </article>
                <article className='card'>
                  <MdOutlineMilitaryTech className='aboutme-icon'/>
                  <h5>Skills</h5>
                  <small>React,Javascript, Python, SQL</small>
                </article>
                <article className='card'>
                  <VscFolderLibrary className='aboutme-icon'/>
                  <h5>Projects</h5>
                  <small>5+ Completed</small>
                </article>
              </div>
              <p>I’m a Full Stack Developer with 1+ years of experience building dynamic, scalable web applications using React.js, Next.js, and JavaScript. I specialize in creating seamless user experiences with server-side rendering and efficient data handling — backed by Python and SQL for strong backend logic and database performance.

I’m currently leveling up my backend expertise using Java and Spring Boot, aiming to build end-to-end solutions that are clean, secure, and production-ready. I enjoy transforming ideas into high-impact products, collaborating with teams, and continuously learning new technologies to deliver modern, fast, and user-focused applications.</p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
