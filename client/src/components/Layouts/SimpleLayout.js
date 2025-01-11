import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const SimpleLayout = ({  }) => {
  return <Box sx={{background:'background.default'}} >  <Outlet /> </Box>;
};

export default SimpleLayout;
