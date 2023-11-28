import React from "react";
import'./Contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rrumdkh', 'template_5vs2jp5', form.current, '5dzl1_SZpQC_E9qb7')
    e.target.reset();
      
  };
  return (
    <section id="Contact">
      <h2 className="contact">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
         
          <article className="contact__option">
          <RiMessengerLine className="contact__icon" />
            <h4 className="text">Messenger</h4>
            <h5 className="a">My Messenger</h5>
            <a href="https://m.me/hany.sahar.3?mibextid=LQQJ4d" className="a" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <FaWhatsapp className="contact__icon" />
            <h4 className="text">WhatsApp</h4>
            <h5 className="a">+93792207513</h5>
            <a href="https://api.whatsapp.com/send?phone+93792207513" className="a" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message"></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;