import React from 'react';
import'./Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6';
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>MURSAL</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/invites/contact/?i=1nhyarnfe8d8y&utm_content=i7xir6k' target='_blank'><FaInstagram /></a>
        <a href='https://twitter.com/mursal_yazdani' target='_blank'><FaSquareXTwitter /></a> 
        <a href='https://www.linkedin.com/in/mursal-yazdani-5a50a7254' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Mursal2022' target='_blank'><FaGithub /></a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; Mursal Yazdani. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;