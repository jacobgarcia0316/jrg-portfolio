import React from 'react';
import '../scss/css/projects.css';
// import { Certs } from './Certs';
import { TfiNewWindow } from 'react-icons/tfi';
import ReactPlayer from 'react-player';

import HypeClub from '../projImages/hypeclub1.png';
import EazyLa from '../projImages/EazyLA-Video.mp4';
import FF from '../images/Fit-Fanatics.png';


export const Projects = () => {
  return (
    <div id='projects'>
    {/* <hr/> */}
    <div className='proj-container'>
        <h2 className='proj-header'>My Work</h2>
        <div className='projects'>
          <div className='project hypeclub'>
            <div><img src={HypeClub} alt='Hype Club' className='project-img'></img></div>
            <h2 className='proj-name'>
              <a href='https://hypeclub-kicks.netlify.app' className='proj-link' target='__blank'>Hype Club <TfiNewWindow className='icon'/></a>
            </h2>
            <p className='proj-desc'>e-commerce landing page</p>
          </div>
          <div className='project eazyla'>
            <div className='project-img'>
              <ReactPlayer 
              width='100%'
              className='eazyla-video'
              playing = 'true'
              loop='true'
              url={EazyLa}
              />
            </div>
            <h2 className='proj-name'>
              <a href='https://eazylaemail.netlify.app' className='proj-link' target='__blank'>Eazy LA <TfiNewWindow className='icon'/></a>
            </h2>
            <p className='proj-desc'>Email Newsletter</p>
          </div>
          <div className='project fit-fanatics'>
            <div><img src={FF} alt='Fit Fanatics' className='project-img'></img></div>
            <h2 className='proj-name'>
              <a href='https://fit-fanatics.netlify.app' className='proj-link' target='__blank'>Fit Fanatics <TfiNewWindow className='icon'/></a>
            </h2>
            <p className='proj-desc'>Health and Fitness Landing Page</p>
          </div>

        </div>
    </div>
    </div>
  )
}
