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
    <Carousel animation={"slide"} height={'400px'} interval={2000} duration={500} stopAutoPlayOnHover={false}>
      {slides.map((slide, idx) => {
         return (
            <Slide key={idx} slide={slide} />
         )
      })}
    </Carousel>
   )
}

export default HomeCarousel;
