import React from 'react';
import HomeCarousel from './HomeCarousel';

const Home = () => {



  return (
    <div className="home h-auto">
      <HomeCarousel />
      <div className='home__organic flex'>
        <div className='home__organic--description bg-slate-300 w-1/2 flex flex-col py-32 px-20'>
          <div className='text-halie-dark text-header font-strong'>100% Organic Natural Skincare Products</div>
          <div className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Ut lectus arcu bibendum at varius. Odio ut sem nulla pharetra diam sit amet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nisl suscipit adipiscing bibendum est. Velit euismod in pellentesque massa placerat duis ultricies lacus. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Aliquet nec ullamcorper sit amet. At consectetur lorem donec massa. Nunc sed augue lacus viverra vitae congue. Aliquam ultrices sagittis orci a scelerisque purus.</div>
        </div>
        <div className='home__organic--image w-1/2 flex justify-center items-center bg-lime-300'>
          <img src='https://i.postimg.cc/Kjy17NBt/Pngtree-cosmetic-lotion-package-mockup-png-5877256.png' className=' h-85 w-85' />
        </div>
      </div>
      <div className='home__values flex'>
        <div className='home__values--image w-1/2 flex justify-center items-center bg-lime-300'>
          <img src='https://i.postimg.cc/Kjy17NBt/Pngtree-cosmetic-lotion-package-mockup-png-5877256.png' className=' h-85 w-85' />
        </div>
        <div className='home__values--description bg-slate-300 w-1/2 flex flex-col py-32 px-20'>
          <div className=' '>We value purity of product, transparency of method, and beauty of outcome.</div>
          <div>Read more</div>
        </div>
      </div>
    </div>
  )
}

export default Home;
