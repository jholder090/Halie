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
    <Paper>
      <div style={slideStyles}></div>
      <h2>{slide.title}</h2>
    </Paper>
  )
}

export default Slide;
