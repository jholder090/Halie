import React from 'react';
import Carousel from './Carousel';

const Home = () => {

  const slides = [
    {url: 'https://i.postimg.cc/Kjy17NBt/Pngtree-cosmetic-lotion-package-mockup-png-5877256.png', title: 'Lotion'},
    {url:'https://i.postimg.cc/qMCjpYHs/agave.png', title: 'Agave'},
    {url: 'https://i.postimg.cc/vZrhVVBD/azalea.png', title: 'Azalea'}
  ]

    return (
      <div className="singleProduct__carousel w-1/2 h-85">
        <div className="w-8/12 h-full my-0 mx-auto">
        <Carousel slides={slides} />
        </div>
      </div>
    )
}

export default Home;
