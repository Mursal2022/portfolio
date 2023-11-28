import React from 'react';
import './TimeLine.css';
import img1  from '../../assets/laptop2.jpg';
import img2 from '../../assets/code.jpg';
import img3 from '../../assets/e1.jpg';
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

const TimeLine = () => {
  return (
    <>
    <h2 className='edu'><GiGraduateCap className='icon' /> Education</h2>
    <div className="timeline">
        <div className="t_container left-container">
        <img src={img1} alt="LOGO" />
            <div className="text-box">
            <h5>Information Technology</h5>
              <small className='small'>Herat University</small>
              <p><FaRegCalendarAlt className='about__icon' />  2022 - present</p>
              <span className="left-container-arrow"></span>
            </div>
        </div>
        <div className="t_container right-container">
        <img src={img2} alt="LOGO" />
            <div className="text-box">
            <h5>Full Stack Development</h5>
              <small className='small'>Code To inspire</small>
              <p><FaRegCalendarAlt className='about__icon' />  2022 - present</p>
              <span className="right-container-arrow"></span>
            </div>
        </div>
        <div className="t_container left-container">
        <img src={img3} alt="LOGO" />
            <div className="text-box">
            <h5>English Language</h5>
              <small className='small'>Erteqa Academy</small>
              <p><FaRegCalendarAlt className='about__icon' />  2022 - present</p>
              <span className="left-container-arrow"></span>
            </div>
        </div>
    </div>
    </>

  )
}

export default TimeLine;

