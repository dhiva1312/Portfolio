import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'
const Services = () => {
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container service-container">
                <article className='service'>
                    <div className="service-head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service-list'>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Responsive website design that adapts perfectly across all screen sizes.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Building interactive user interfaces using React.js and JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Clean, maintainable, and SEO-friendly code structure.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Integration with REST APIs for dynamic data and functionality.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Cross-browser compatibility and fast-loading performance optimization.</p>
                        </li>

                    </ul>
                </article>
               
                <article className='service'>
                    <div className="service-head">
                        <h3>Mobile App Development</h3>
                    </div>
                    <ul className='service-list'>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Building cross-platform mobile apps using React Native for both Android and iOS.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Creating smooth and responsive UIs that adapt to all screen sizes.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Integrating APIs and managing data using React Native and JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Handling navigation, user input, and state management efficiently.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Debugging and optimizing performance for better user experience.</p>
                        </li>



                    </ul>
                </article>
                 <article className='service'>
                    <div className="service-head">
                        <h3> Frontend Integration</h3>
                    </div>
                    <ul className='service-list'>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Seamless integration of frontend with backend APIs using fetch or Axios.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Dynamic rendering of data with state management in React.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Handling authentication, routing, and protected pages efficiently.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Implementing real-time updates and data flow using JSON data from APIs.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Building reusable components that work across different pages/modules.</p>
                        </li>


                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
