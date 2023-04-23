import React from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';

const ProductCarousel = ({ product }) => {
  return (
    <div className="singleProduct__carousel w-1/2 border-solid border-2 border-cyan-300 h-85 relative">
    <button className="carousel__button carousel__buton--left absolute top-2/4 -translate-y-2/4 -left-10 bg-cyan-500 cursor-pointer">
      <CaretLeft />
    </button>
    <div className="carousel__track-container h-5/6 relative bg-lime-300">
      <ul className="carousel__track list-none">
        <li className="carousel__slide w-full absolute top-0 bottom-0">
          <img className='w-full h-full object-cover bg-slate-500' src={product.imageUrl} />
        </li>
        <li className="carousel__slide w-full absolute top-0 bottom-0">
          <img className='w-full h-full object-cover bg-slate-500' src="https://i.postimg.cc/qMCjpYHs/agave.png" />
        </li>
        <li className="carousel__slide w-full absolute top-0 bottom-0">
          <img className='w-full h-full object-cover bg-slate-500' src="https://i.postimg.cc/vZrhVVBD/azalea.png" />
        </li>
      </ul>
    </div>
    <button className="carousel__button carousel__buton--right absolute top-2/4 -translate-y-2/4 -right-10 bg-cyan-500 cursor-pointer">
      <CaretRight />
    </button>
    <div className="carousel__nav bg-pink-500 h-1/6 flex justify-center items-center">
      <button className="carousel__indicator rounded-full w-4 h-4 bg-slate-300 m-3"></button>
      <button className="carousel__indicator rounded-full w-4 h-4 bg-slate-300 m-3"></button>
      <button className="carousel__indicator rounded-full w-4 h-4 bg-slate-300 m-3"></button>
    </div>
  </div>
  )
}

export default ProductCarousel;
