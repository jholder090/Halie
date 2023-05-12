import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Slide from './Slide'

const HomeCarousel = () => {

   const slides = [
      {url: 'https://i.postimg.cc/Kjy17NBt/Pngtree-cosmetic-lotion-package-mockup-png-5877256.png', title: 'Lotion'},
      {url:'https://i.postimg.cc/qMCjpYHs/agave.png', title: 'Agave'},
      {url: 'https://i.postimg.cc/vZrhVVBD/azalea.png', title: 'Azalea'}
    ]

   return (
    <Carousel animation={"slide"} height={'300px'} interval={5000} duration={500} stopAutoPlayOnHover={false}  fullHeightHover={false}
    navButtonsProps={{
      style: {
          backgroundColor: 'cornflowerblue',
          borderRadius: 0
      }
   }}
   navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
      style: {
          bottom: '0',
          top: 'unset'
      }
  }}
  NextIcon='hello'             // Change the "inside" of the next button to "next"
  PrevIcon='goodbye'
  indicatorContainerProps={{
   style: {
       height: '50px',
       backgroundColor: 'cornflowerblue'
   }
}}
    className='CAROUSEL bg-slate-300 h-3/5'>
      {slides.map((slide, idx) => {
         return (
            <Slide key={idx} slide={slide} />
         )
      })}
    </Carousel>
   )
}

export default HomeCarousel;
