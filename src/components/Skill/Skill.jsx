import React from 'react';
import'./Skill.css';
import { ImFolderOpen } from "react-icons/im";

const Skill = () => {
  return (
    <section className='skill-section' id='Skill'>

      <div className="container">
         <div className='section_title center'>
           <h2 className='title'><ImFolderOpen className='folder' /> Skills in Web & others</h2>
        </div>
        
          <div className='skill-items'>
            <div className="skill-item">
              <div className="skill-info">
                <p>HTML</p>
                <p>95%</p>
                </div>
                <div className="progress-line" data-percent='95%'>
                  <span style={{width:'95%'}}></span>
                </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>CSS</p>
                <p>95%</p>
                </div>
                <div className="progress-line" data-percent='95%'>
                  <span style={{width:'95%'}}></span>
                </div>
             
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>JS</p>
                <p>85%</p>
                </div>
                <div className="progress-line" data-percent='85%'>
                  <span style={{width:'85%'}}></span>
                </div>
             
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>Java</p>
                <p>80%</p>
                </div>
                <div className="progress-line" data-percent='80%'>
                  <span style={{width:'80%'}}></span>
                </div>
             
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>C++</p>
                <p>78%</p>
                </div>
                <div className="progress-line" data-percent='78%'>
                  <span style={{width:'78%'}}></span>
                </div>
             
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>ICDL</p>
                <p>90%</p>
                </div>
                <div className="progress-line" data-percent='90%'>
                  <span style={{width:'90%'}}></span>
                </div>
             
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>English</p>
                <p>92%</p>
                </div>
                <div className="progress-line" data-percent='92%'>
                  <span style={{width:'92%'}}></span>
                </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>IT</p>
                <p>50%</p>
                </div>
                <div className="progress-line" data-percent='50%'>
                  <span style={{width:'50%'}}></span>
                </div>
            </div>   
        </div>
        </div> 
    </section>
  )
}
export default Skill;
