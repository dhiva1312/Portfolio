import React from 'react'
import './portfolio.css';
import IMGE1 from '../../assets/portfolio5.png'
import IMGE2 from '../../assets/portfolio2.jpg'
import IMGE3 from '../../assets/portfolio3.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio-container">
            <article className='portfolio'>
                <div className="portfolio-image">
                    <img src={IMGE1} alt="" />
                </div>
                <h3>E-commerce Website</h3>
                <p>Developed a complete authentication flow including sign-up, login, password reset, 
                    and user invitation. Also integrated WhatsApp and email features for seller onboarding.</p>
                    
                
                
            </article>
            <article className='portfolio'>
                <div className="portfolio-image">
<img src={IMGE2} alt="" />
                </div>
                <h3>Sign-Up Flow System</h3>
                <p>Developed a complete authentication flow including sign-up, login, password reset, 
                    and user invitation. Also integrated WhatsApp and email features for seller onboarding.</p>
            </article>
            <article className='portfolio'>
                <div className="portfolio-image">
<img src={IMGE3} alt="" />
                </div>
                <h3>Personal Portfolio</h3>
                <p>Designed and developed a modern, mobile-friendly portfolio using React and Tailwind. Highlights projects, skills, and
                     services with interactive elements to enhance user engagement and reflect a professional personal brand.</p>
            </article>
        </div>
    </section>
  )
}

export default Portfolio
