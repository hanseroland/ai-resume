import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBarComponent from './AppBarComponent';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';



const ResumeLayout = () => {

  const links = [
    { text: 'Tableau de bord', path: '/', icon: <HomeIcon /> },
    { text: 'Resumes', path: '/resumes', icon: <PeopleIcon /> },
    { text: 'Profile', path: '/profile', icon: <PersonIcon/> },
  ];
  
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

   
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarComponent 
        title="Resume AI"
        open={open} 
        drawerWidth={240} 
        handleDrawerOpen={handleDrawerOpen}
      />
      <Sidebar 
        
        open={open} 
        handleDrawerClose={handleDrawerClose} 
        links={links}
    
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet /> 
      </Box>
    </Box>
  );
};

export default ResumeLayout;


