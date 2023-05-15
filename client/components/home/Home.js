import React from 'react';
import HomeCarousel from './HomeCarousel';
import './home.css';

const Home = () => {



  return (
    <div className="home h-auto">
      <HomeCarousel />
      <div className='home__organic flex'>
        <div className='home__organic--description w-1/2 flex flex-col py-32 px-20'>
          <div className='text-halie-dark text-header font-strong'>100% Organic Natural Skincare Products</div>
          <div className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Ut lectus arcu bibendum at varius. Odio ut sem nulla pharetra diam sit amet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nisl suscipit adipiscing bibendum est. Velit euismod in pellentesque massa placerat duis ultricies lacus. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Aliquet nec ullamcorper sit amet. At consectetur lorem donec massa. Nunc sed augue lacus viverra vitae congue. Aliquam ultrices sagittis orci a scelerisque purus.</div>
          <div className="div1 m-1 w-4/12 flex items-center justify-around rounded-full bg-halie-dark hover:bg-halie-hover hover:cursor-pointer">
            Read more
          </div>
        </div>
        <div className='home__organic--image w-1/2 flex justify-center items-center bg-halie-med'>
          <img src='https://i.postimg.cc/Kjy17NBt/Pngtree-cosmetic-lotion-package-mockup-png-5877256.png' className=' h-85 w-85' />
        </div>
      </div>
      <div className='home__values bg-slate-300 flex flex-col items-center py-16 px-20'>
        <div className='text-halie-dark text-header font-strong '>Our Values</div>
        <div>Purity of Product</div>
        <div>Transparency of Process</div>
        <div>Beauty of Outcome</div>
        <div className="div1 m-1 w-4/12 flex items-center justify-around rounded-full bg-halie-dark hover:bg-halie-hover hover:cursor-pointer">
          Read more
        </div>
      </div>
    </div>
  )
}

export default Home;
