import React from 'react';
import { Paper, Button } from '@mui/material';

const Slide = ({ slide }) => {

  const slideStyles = {
    backgroundImage: `url(${slide.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    width: '250px',
  }

  return (
    <Paper className='flex justify-center align-center'>
      <div className='flex flex-col justify-center align-center'>
        <div style={slideStyles}></div>
        <h2 className='text-center'>{slide.title}</h2>
      </div>

    </Paper>
  )
}

export default Slide;
