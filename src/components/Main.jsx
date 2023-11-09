import React from 'react';
import '../scss/css/main.css';
import { Link } from 'react-scroll';

import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { BiLogoReact } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { PiFileSql } from 'react-icons/pi';
import { DiSass } from 'react-icons/di';
import { BiLogoPython } from 'react-icons/bi';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FiFigma } from 'react-icons/fi';

import profilePic from '../images/myPic.jpeg';

export const Main = () => {

  return (
    <div id='main'>
    <div className='main-container'>
        <div className='left'>
            <p className='aboutme-text'>
                I am a Front-End Software Engineer, Web Developer, UX/UI Designer, Content Editor and Email Developer from Los Angeles County and Orange County in California. <br/><br/>
                In order to successfully fulfill these roles, I possess essential skills in the core fundamental elements of Front-End Software Development, HTML, CSS, JavaScript and React, as well as accompanying and supporting competence in areas such as Git/Version Control, SASS, Figma, and SQL/Database manipulation. <br/> <br/>
                In addition to my skills in the software industry, I am also equipped with countless, extensive and valuable soft skills which were attained through working in the Retail and Customer Service Industry as both an employee and a Manager/Supervisor.
                These skills include customer service and retention, working and co-planning in a team setting, reasonable delegation/distribution of tasks and efficient management of time.            
            </p>
            <button className='main-btn port-btn'>
                <Link activeClass='active' smooth spy to='projects'>
                    View my work
                </Link>
            </button>
            <button className='main-btn contact-btn'>
                <Link activeClass='active' smooth spy to='contact'>
                    Hire Me
                </Link>
            </button>
        </div>
        <div className='right'>
            <div className='profile-images'>
                <img src={profilePic} alt='Profile' className='profilePic'></img>
                <img src={profilePic} alt='Profile' className='profilePic'></img>
            </div>
            <p className='quote'>
            “The day you <i><strong>stop</strong></i> learning is the day you <i><strong>stop</strong></i> living.”
            </p>
            <section className='skills-list'>
                <li className='skill' title='HTML'><AiOutlineHtml5 /></li>
                <li className='skill' title='CSS'><DiCss3 /></li>
                <li className='skill' title='JavaScript'><BiLogoJavascript /></li>
                <li className='skill' title='React'><BiLogoReact /></li>
                <li className='skill' title='SASS'><DiSass /></li>
                <li className='skill' title='Figma'><FiFigma /></li>
                <li className='skill' title='Tailwind Css'><BiLogoTailwindCss /></li>
                <li className='skill' title='Python'><BiLogoPython /></li>
                <li className='skill' title='SQL'><PiFileSql /></li>
            </section>
        </div>
    </div>
    </div>
  )
}
