import React from 'react'
import './contact.css'
import { SiMinutemailer } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_ylb9stn', 'template_veoaaar', e.target, 'eQRyRMtXQcYgT9aH3')
    .then(
      () => {
        console.log('SUCCESS!');
         toast.success('Message sent successfully!');
          e.target.reset(); // clear form
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error('Failed to send message. Please try again.');
      }
    );
};
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className="container contact-container">
        <div className='contact-options'>
          <article className='contact-option'>
            <SiMinutemailer className='contact-icon'/>
          <h4>Email</h4>
          <h5>dhivakarvasu2000@gmail.com</h5>
          <a href="mailto:dhivakarvasu2000@gmil.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact-option'>
            <FaWhatsapp className='contact-icon'/>
  <h4>WhatsApp</h4>
  {/* <h5>9042313322</h5> */}
  <a 
    href="https://wa.me/919042313322" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Send a Message
  </a>
</article>

          
        </div>

        <form ref={form} onSubmit={sendEmail}>
  <input type="text" name="user_name" placeholder="Your Full Name" required />
  <input type="email" name="user_email" placeholder="Your Email" required />
  <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
  <button type="submit" className="btn btn-primary">Send Message</button>
</form>
<ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </section>
  )
}

export default Contact
