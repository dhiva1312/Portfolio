import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id='experience' className='main-container'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon"/>
             <div> <h4>CSS</h4>
             <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon"/>
              <div><h4>JavaScript</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon"/>
              <div><h4>ReactJS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon"/>
              <div><h4>React Native</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon"/>
             <div> <h4> BootStrap</h4>
             <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
        <h3>Backend Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon" />
              <div><h4>Python</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon"/>
              <div><h4>Java</h4>
              <small className='text-light'>Beginner</small></div>
            </article>
            {/* <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon"/>
             <div> <h4>C#</h4>
             <small className='text-light'>Beginner</small></div>
            </article> */}
            <article className='experience-details'>
              <BsPatchCheckFill className="experience-details-icon"/>
              <div><h4>SQL</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
           
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience
