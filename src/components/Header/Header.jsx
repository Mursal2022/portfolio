import React from 'react';
import'./Header.css';
import CTA from '../CTA';
import img1 from '../../assets/profile.jpg';
import { FaArrowDown } from "react-icons/fa";

const Header = () => {

  return (
    <section>
    <div className="logo">
      <h2 className='h2'>M</h2>
      </div>
    <header> 
      <div className="container header__container">
        <h3>Hello, I'm</h3>
         <h1 className='h1'>Mursal Yazdani</h1>
        <h4>Front-end Developer</h4>
        <h5>Our main goal to help & 
           satisficed the Local & Global Clients by Web Development solution.</h5> 
        <CTA />
        <div className='me'>
          <img src={img1} alt="" className='me1' />
        </div>
        <a href="#About" className="scroll__down"><FaArrowDown /></a>
      </div>
      <br />
    </header>
    </section>
  )
}

export default Header;
