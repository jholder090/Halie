import React, { useEffect, useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="carousel__slider h-full relative overflow-hidden">

<div className="slider__leftArrow absolute top-1/2 -translate-x-2/4 left-8 cursor-pointer"
        onClick={goToPrevious}
      >
        <CaretLeft />
      </div>
      <div className="slider__rightArrow absolute top-1/2 -translate-x-2/4 right-8 cursor-pointer"
        onClick={goToNext}
      >
        <CaretRight />
      </div>

      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="carousel__slide w-full h-5/6 rounded-md bg-center bg-cover">
        </div>

      <div className="dotsContainer flex justify-center">
        {slides.map((slide, slideIndex) => {
          return (
            <div key={slideIndex} className={slideIndex == currentIndex ? 'w-4 h-4 mx-2 rounded-full bg-slate-500 cursor-pointer' : 'w-4 h-4 mx-2 rounded-full bg-slate-300 cursor-pointer'}
              onClick={() => goToSlide(slideIndex)}></div>
          )
        })}
      </div>

    </div>
  )
}



export default ImageSlider
