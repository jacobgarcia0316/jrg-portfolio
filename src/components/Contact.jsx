import React from 'react';
import '../scss/css/contact.css';

import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
// import {AiFillGithub} from 'react-icons/ai'
import Resume from '../images/resume.png'
export const Contact = () => {
  return (
    <div id='contact'>
        {/* <hr/> */}
        <div className='contact-page'>
        <h2 className='contact-header'>Get in contact</h2>
            <div className='contact-form'>
                <section className='contact-left'>
                    <p className='contact-text'> 
                        Thank you for taking the time to visit my page!<br/><br/>
                        Do not hesitate! Please, send me a message regarding any opportunities. I always look forward to pursuing new roles and positions. <br/><br/>
                        Alternatively, feel free to leave any questions, critiques, or constructive criticism you have regarding my portfolio or my past projects.<br/> <br/>
                        Any, and all, are accepted and appreciated! <br/><br/>
                        - Sincerely, <br/> Jacob Roxas Garcia
                    </p>
                </section>
                <section className='contact-right'>
                    <div className='contact-footer'>
                        <p className='contact-item-out'><a className='contact-item' href="mailto:jacobroxasgarcia@yahoo.com"><AiOutlineMail className='icon' size={30}/> jacobroxasgarcia@yahoo.com</a></p>
                        <p><a className='contact-item'  href="tel:3106345483"><AiOutlinePhone className='icon' size={30}/> 310) 634-5483</a></p>
                        <p><a className='contact-item'  href="https://www.linkedin.com/in/jacob-garcia-06b659230/" target='_blank' rel='noreferrer'><AiOutlineLinkedin className='icon' size={30}/> LinkedIn</a></p>
                        <a href={Resume} download className='contact-item resume'>view my Resume</a>
                        {/* <p><a className='contact-item'  href="https://github.com/jacobgarcia0316" target='_blank'><AiFillGithub className='icon' size={30}/> Github</a></p> */}
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}
