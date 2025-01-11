import React from 'react';
import { Typography } from '@mui/material';

const ClickableImage = ({ link, imageSrc, altText = 'icon réseau social' }) => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Typography
      onClick={() => openLink(link)}
      sx={{ 
        cursor: 'pointer', 
        display: 'inline-block',
        
    }}
    >
      <img src={imageSrc} alt={altText} style={{ width: 40, height:40 }} />
    </Typography>
  );
};

export default ClickableImage;
