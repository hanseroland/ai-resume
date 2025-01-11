import React, { useState } from 'react';
import { Fab, Tooltip, Typography, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom:100,
        right: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: hovered ? 1 : 0,
        transition: 'all 0.3s ease-in-out',
        zIndex:2000
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered && (
        <Typography
          sx={{
            backgroundColor: '#25D366',
            color: '#fff',
            px: 2,
            py: 1,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          Commander sur WhatsApp
        </Typography>
      )}
      
        <Fab
          color="success"
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: 46,
            height: 46,
            backgroundColor: '#25D366',
            '&:hover': {
              backgroundColor: '#1eb954',
            },
          }}
        >
          <WhatsAppIcon sx={{ color: '#fff' }} />
        </Fab>
     
    </Box>
  );
};

export default FloatingButton;
