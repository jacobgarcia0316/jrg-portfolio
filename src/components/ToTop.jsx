import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import '../scss/css/toTop.css';

export const ToTop = () => {
  return (
    <div>
      <div/>
      <ScrollToTop 
      smooth
      top={200}
      className='toTop'
      />
    </div>
  )
}

//https://www.npmjs.com/package/react-scroll-to-top