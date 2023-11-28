
import React from 'react';
import './About.css';
import img1 from '../../assets/profile.jpg';

  
const About = () => {
  return (
    <section id='About'>
      <h2 className='intro'>About Me</h2>

       <div className=" container about__countainer">
        <div className='about__me'>
            <img className='img' src={img1} alt="" />
        </div>
        <div className="about__content">
          <p className='p'>- Passionate about creating Web Paages with innovate and different designs. Cooperation with back-end developers and Cloients has a great expected result. 
          Coding is an exciting world for every Developer, and I am always looking for new technologies and providing wonderful
          projects. If you are looking for a developer to build your projects, contact me.
          </p>
          <a href="#Contact" className='btn'>Let's Talk</a>
        </div>
       </div>
    </section>
  )
}

export default About;