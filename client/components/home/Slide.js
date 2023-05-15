import React from 'react';
import { Paper, Button } from '@mui/material';

const Slide = ({ slide }) => {

  const slideStyles = {
    backgroundImage: `url(${slide.url})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '95%',
    width: '500px',
  }

  return (
    <Paper className='SLIDE h-full flex justify-center align-center border-0'>
      <div className='flex h-full flex-col justify-center align-center'>
        <div style={slideStyles}></div>
      </div>

    </Paper>
  )
}

export default Slide;
