import React from 'react';
import '../scss/css/navbar.css';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

export const Navbar = () => {

  return (
    <div className='nav-page'>
        <nav className='navbar-container'>
          <div className='typer'>
                  <TypeAnimation
                  sequence={[
                    'My name is Jacob Roxas Garcia', 
                    5000,
                      'FRONT END DEVELOPER',
                      1000,
                      'UX / UI DESIGNER',
                      1000,
                      'WEB DEVELOPER',
                      1000,
                      'CONTENT EDITOR',
                      1000,
                      'EMAIL DEVELOPER',
                      1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  />
          </div>
          <div className='nav-list'>
            <li className='nav-item'>
              <Link activeClass='active' smooth spy to='main'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link activeClass='active' smooth spy to='projects'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link activeClass='active' smooth spy to='certifications'>
                Certifications
              </Link>
            </li>
            <li className='nav-item'>
              <Link activeClass='active' smooth spy to='contact'>
                Contact
              </Link>
            </li>
          </div>
        </nav>
    </div>
  )
}
