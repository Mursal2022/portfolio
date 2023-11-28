import {AiOutlineHome} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {BiUser} from 'react-icons/bi';
import {BiBookBookmark} from 'react-icons/bi';
import {AiOutlineMessage} from 'react-icons/ai';
import React from 'react';
import'./Nav.css';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><BiUser/></a>
      <a href="#Skill" onClick={() => setActiveNav('#Skill')} className={activeNav === '#Skill' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#Project" onClick={() => setActiveNav('#Project')} className={activeNav === '#Project' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav;

