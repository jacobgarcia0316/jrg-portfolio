import React from 'react';
import '../scss/css/certs.css';
import CN from '../images/CloudNative.png';
import CSULB from '../images/CSULBcert.png';
import Git from '../images/Git.png';
import HCJ from '../images/HTML-CSS-JS.png';
import ReactCert from '../images/ReactCert.png';
import UXUI from '../images/UXUI.png';

import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';


const images = [
  CSULB, CN, Git, HCJ, ReactCert, UXUI
]

export const Certs = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  return (
    <div id='certifications'>
    <div className='certs-page'>
      <h2 className='certs-header'>Certifications</h2>
    <div className='carousel'>
      <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            forwardBtnProps={{
              style: {
                alignSelf: 'center',
                background: 'black',
                border: 'none',
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px',
                height: 30,
                lineHeight: 1,
                textAlign: 'center',
                width: 30,
              },
              children: <span>{`>`}</span>,
            }}
            backwardBtnProps={{
              style: {
                alignSelf: 'center',
                background: 'black',
                border: 'none',
                borderRadius: '50%',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px',
                height: 30,
                lineHeight: 1,
                textAlign: 'center',
                width: 30,
              },
              children: <span>{`<`}</span>,
            }}
            responsiveProps={[
              {
                itemsToShow: 1,
                itemsToScroll: 1,
              },
            ]}
            speed={500}
          >
            <div>
              <img className='cert' src={images[0]} alt='Certification'></img>
            </div>
            <div>
              <img className='cert' src={images[1]} alt='Certification'></img>
            </div>
            <div>
              <img className='cert' src={images[2]} alt='Certification'></img>
            </div>
            <div>
              <img className='cert' src={images[3]} alt='Certification'></img>
            </div>
            <div>
              <img className='cert' src={images[4]} alt='Certification'></img>
            </div>
            <div>
              <img className='cert' src={images[5]} alt='Certification'></img>
            </div>
        </ReactSimplyCarousel>
      <section className='prog-links'>
        <p className='prog-text'>~Find out more information about these programs~</p>
        <a href='https://www.coursera.org/professional-certificates/ibm-frontend-developer#courses' className='prog-link' target='__blank'>IBM Front End Developer</a>
        <a href='https://www.cpace.csulb.edu/courses/software-development-bootcamp#/' className='prog-link' translate='__blank'>California State University, Long Beach Software Development</a>
      </section>
    </div>
    </div>
  </div>
  )
}