import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { Apps, ArrowLeft, ArrowRight, Palette, Close } from '@mui/icons-material';

const colors = ['#000','#4CAF50', '#FFEB3B', '#F44336', '#2196F3', '#9C27B0', '#E91E63', '#795548'];

const FormSectionHeader = ({ activeFormIndex, setActiveFormIndex, enableNext, setCvColor }) => {
  const [showColors, setShowColors] = useState(false);

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: 'auto',
        p: 2,
        mb: 2,
        borderTop: '4px solid rgb(86, 128, 236)',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        '@media (min-width:600px)': {
          flexDirection: 'row',
          justifyContent: 'space-between',
        }
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="outlined" startIcon={<Apps />} size="small" sx={{ textTransform: 'none' }}>
          Thèmes
        </Button>

        {!showColors && (
          <Button
            variant="outlined"
            startIcon={<Palette />}
            size="small"
            sx={{ textTransform: 'none' }}
            onClick={() => setShowColors(true)}
          >
            Couleurs
          </Button>
        )}
      </Box>

      {showColors && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: 1,
            backgroundColor: '#f9f9f9',
            borderRadius: 2,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: showColors ? 1 : 0,
            transform: showColors ? 'translateY(0)' : 'translateY(-10px)',
          }}
        >
          {colors.map((color) => (
            <IconButton
              key={color}
              onClick={() => setCvColor(color)}
              sx={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                backgroundColor: color,
                border: '2px solid white',
                boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease',
                },
              }}
            />
          ))}
          <IconButton onClick={() => setShowColors(false)}>
            <Close />
          </IconButton>
        </Box>
      )}

      <Box sx={{ display: 'flex', gap: 1 }}>
        {activeFormIndex > 1 && (
          <Button
            variant="contained"
            startIcon={<ArrowLeft />}
            size="small"
            sx={{ textTransform: 'none' }}
            onClick={() => setActiveFormIndex(activeFormIndex - 1)}
          >
            Retour
          </Button>
        )}

        <Button
          variant="contained"
          endIcon={<ArrowRight />}
          size="small"
          sx={{ textTransform: 'none' }}
          disabled={!enableNext}
          onClick={() => setActiveFormIndex(activeFormIndex + 1)}
        >
          Suivant
        </Button>
      </Box>
    </Box>
  );
};

export default FormSectionHeader;
