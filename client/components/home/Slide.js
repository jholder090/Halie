import React from 'react';
import { Paper, Button } from '@mui/material';

const Slide = ({ slide }) => {

  const slideStyles = {
    backgroundImage: `url(${slide.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '350px',
  }

  return (
    <Paper className='SLIDE h-full flex justify-center align-center border-0'>
      <div className='flex  h-full flex-col justify-center align-center'>
        <div style={slideStyles}></div>
        <h2 className='text-center'>{slide.title}</h2>
      </div>

    </Paper>
  )
}

export default Slide;
